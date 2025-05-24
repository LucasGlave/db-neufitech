import {
    Injectable,
    BadRequestException,
    UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Membresia } from '../../common/entities/membresia.entity';
import { Sistema } from '../../common/entities/sistema.entity';
import { Programa } from '../../common/entities/programa.entity';
import { MembresiaType } from 'src/common/types/membresia.types';
import { Paciente } from 'src/common/entities/paciente.entity';
import { Profesional } from 'src/common/entities/profesional.entity';

@Injectable()
export class MembresiaService {
    constructor(
        @InjectModel(Membresia)
        private readonly membresiaModel: typeof Membresia,
        @InjectModel(Sistema)
        private readonly sistemaModel: typeof Sistema,
        @InjectModel(Programa)
        private readonly programaModel: typeof Programa,
        @InjectModel(Paciente)
        private readonly pacienteModel: typeof Paciente,
        @InjectModel(Profesional)
        private readonly profesionalModel: typeof Profesional,
    ) {}

    findAll() {
        return this.membresiaModel.findAll({ order: [['id', 'ASC']] });
    }

    findOne(id: number) {
        return this.membresiaModel.findByPk(id);
    }

    async create(data: MembresiaType) {
        const sistema = await this.sistemaModel.findByPk(data.sistema_id);
        if (!sistema) {
            throw new BadRequestException(
                'Invalid sistema_id: Sistema does not exist',
            );
        }
        if (data.programaIds) {
            const programas = await this.programaModel.findAll();
            const programsNotExists = data.programaIds.filter(
                (programaId: number) =>
                    !programas.some((programa) => programa.id === programaId),
            );
            if (programsNotExists.length > 0) {
                throw new BadRequestException(
                    `Invalid programaIds: ${programsNotExists.join(', ')}`,
                );
            }
        }
        return this.membresiaModel.create(data as Partial<Membresia>);
    }

    async update(id: number, data: MembresiaType) {
        const update = await this.membresiaModel.update(data, {
            where: { id },
        });
        if (update[0] === 1) return this.membresiaModel.findByPk(id);
    }

    async check(data: {
        documento: number;
        nombre_sistema?: string;
        version_sistema?: string;
    }) {
        if (!data.documento) {
            throw new BadRequestException('El campo documento es requerido.');
        }
        const paciente = await this.pacienteModel.findOne({
            where: { documento: data.documento },
        });
        if (paciente) {
            const propietario_id = paciente.dataValues.propietario_id;
            const membresia = await this.membresiaModel.findOne({
                where: { propietario_id: propietario_id },
            });
            if (!membresia) {
                throw new BadRequestException(
                    'No se encontró membresía para el propietario.',
                );
            }
            // Check sistema if required
            if (data.nombre_sistema || data.version_sistema) {
                const sistema = await this.sistemaModel.findByPk(
                    membresia.dataValues.sistema_id,
                );
                if (!sistema) {
                    throw new BadRequestException(
                        'No se encontró el sistema vinculado a la membresía.',
                    );
                }
                if (
                    (data.nombre_sistema &&
                        sistema.dataValues.nombre !== data.nombre_sistema) ||
                    (data.version_sistema &&
                        sistema.dataValues.version !== data.version_sistema)
                ) {
                    throw new BadRequestException(
                        'El sistema vinculado no coincide con los datos proporcionados.',
                    );
                }
            }
            if (membresia.dataValues.verificado) {
                throw new UnauthorizedException(
                    'La membresía ya está verificada.',
                );
            }
            if (propietario_id > 2) {
                membresia.set('verificado', true);
                await membresia.save();
                await membresia.reload();
                return {
                    usuario: { tipo: 'paciente', ...paciente.toJSON() },
                    membresia: membresia.toJSON(),
                };
            } else {
                return {
                    usuario: { tipo: 'paciente', ...paciente.toJSON() },
                    membresia: { ...membresia.toJSON(), verificado: false },
                };
            }
        }
        const profesional = await this.profesionalModel.findOne({
            where: { documento: data.documento },
        });
        if (profesional) {
            const propietario_id = profesional.dataValues.propietario_id;
            const membresia = await this.membresiaModel.findOne({
                where: { propietario_id: propietario_id },
            });
            if (!membresia) {
                throw new BadRequestException(
                    'No se encontró membresía para el propietario.',
                );
            }
            // Check sistema if required
            if (data.nombre_sistema || data.version_sistema) {
                const sistema = await this.sistemaModel.findByPk(
                    membresia.dataValues.sistema_id,
                );
                if (!sistema) {
                    throw new BadRequestException(
                        'No se encontró el sistema vinculado a la membresía.',
                    );
                }
                if (
                    (data.nombre_sistema &&
                        sistema.dataValues.nombre !== data.nombre_sistema) ||
                    (data.version_sistema &&
                        sistema.dataValues.version !== data.version_sistema)
                ) {
                    throw new BadRequestException(
                        'El sistema vinculado no coincide con los datos proporcionados.',
                    );
                }
            }
            if (membresia.dataValues.verificado) {
                throw new UnauthorizedException(
                    'La membresía ya está verificada.',
                );
            }
            if (propietario_id > 2) {
                membresia.set('verificado', true);
                await membresia.save();
                await membresia.reload();
                return {
                    usuario: { tipo: 'profesional', ...profesional.toJSON() },
                    membresia: membresia.toJSON(),
                };
            } else {
                return {
                    usuario: { tipo: 'profesional', ...profesional.toJSON() },
                    membresia: { ...membresia.toJSON(), verificado: false },
                };
            }
        }
        throw new BadRequestException(
            'No se encontró paciente ni profesional con ese documento.',
        );
    }

    async patch(id: number, data: any) {
        if (data.programaIds) {
            const programas = await this.programaModel.findAll();
            const programsNotExists = data.programaIds.filter(
                (programaId: number) =>
                    !programas.some((programa) => programa.id === programaId),
            );
            if (programsNotExists.length > 0) {
                throw new BadRequestException(
                    `Invalid programaIds: ${programsNotExists.join(', ')}`,
                );
            }
        }
        const cambio = await this.membresiaModel.findByPk(id);
        if (!cambio) {
            throw new BadRequestException('Membresia not found');
        }
        Object.assign(cambio, data);
        const update = await this.membresiaModel.update(cambio, {
            where: { id },
        });
        if (update[0] === 1) return this.membresiaModel.findByPk(id);
        throw new BadRequestException(
            `Failed to update Membresia with id ${id}.`,
        );
    }

    delete(id: number) {
        return this.membresiaModel.destroy({ where: { id } });
    }
}
