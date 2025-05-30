import { Sistema } from '../../common/entities/sistema.entity';

export const seedSistema = async () => {
    const count = await Sistema.count();
    if (count === 0) {
        await Sistema.create({
            version: '1.0',
            nombre: 'Default Sistema',
        });
        console.log('[✔] Sistema seed done');
    }
};
