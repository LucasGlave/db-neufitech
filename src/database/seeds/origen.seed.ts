import { Origen } from '../../common/entities/origen.entity';

export const seedOrigen = async () => {
    const count = await Origen.count();
    if (count === 0) {
        await Origen.bulkCreate([
            { nombre_completo: 'SEED', tipo: "paciente", foreign_key: 1 },
        ]);
        console.log('[✔] Origen seed done');
    } else {
        console.log('[i] Origen already seeded');
    }
};
