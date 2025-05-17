import { ObraSocial } from '../../common/entities/obraSocial.entity';

export const seedObraSocial = async () => {
    const count = await ObraSocial.count();
    if (count === 0) {
        await ObraSocial.bulkCreate([
            { nombre: 'OSDE' },
            { nombre: 'Swiss Medical' },
            { nombre: 'PAMI' },
        ]);
        console.log('[✔] ObraSocial seed done');
    }
};
