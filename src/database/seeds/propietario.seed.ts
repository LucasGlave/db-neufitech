import { Propietario } from '../../common/entities/propietario.entity';

export const seedPropietario = async () => {
    const count = await Propietario.count();
    if (count === 0) {
        await Propietario.create({
            foreign_key: '1',
            tipo: 'paciente',
        });
        console.log('[✔] Propietario seed done');
    } else {
        console.log('[i] Propietario already seeded');
    }
};
