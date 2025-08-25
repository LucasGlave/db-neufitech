import { Test, TestingModule } from '@nestjs/testing';
import { getModelToken } from '@nestjs/sequelize';
import { DatosContactoService } from './datos-contacto.service';
import { DatosContacto } from '../../common/entities/datosContacto.entity';
import { Paciente } from '../../common/entities/paciente.entity';

describe('DatosContactoService', () => {
    let service: DatosContactoService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                DatosContactoService,
                {
                    provide: getModelToken(DatosContacto),
                    useValue: {
                        findAndCountAll: jest.fn(),
                        findByPk: jest.fn(),
                    },
                },
                {
                    provide: getModelToken(Paciente),
                    useValue: {},
                },
            ],
        }).compile();

        service = module.get<DatosContactoService>(DatosContactoService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
