import { Paciente } from '../../common/entities/paciente.entity';

export const seedPaciente = async () => {
    const count = await Paciente.count();
    if (count === 0) {
        await Paciente.bulkCreate([
            { nombre_completo: 'SEED', pais: 'Argentina', provincia: 'Buenos Aires', ciudad: 'Buenos Aires', direccion: 'Calle Falsa 123', documento: '123', fecha_nacimiento: new Date('1990-01-01'), diagnostico: 'ELA', origen_id: 1, obra_social_id: 1 },
        ]);
        console.log('[✔] Paciente seed done');
    } else {
        console.log('[i] Paciente already seeded');
    }
};
