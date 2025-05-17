import { Programa } from '../../common/entities/programa.entity';

export const seedPrograma = async () => {
    const count = await Programa.count();
    if (count === 0) {
        await Programa.bulkCreate([
            { nombre: 'whatsapp' },
            { nombre: 'instagram' },
            { nombre: 'youtube' },
            { nombre: 'spotify' },
            { nombre: 'teclado-ia' },
        ]);
        console.log('[✔] Programa seed done');
    }
};
