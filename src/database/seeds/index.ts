import { seedObraSocial } from './obra-social.seed';
import { seedOrigen } from './origen.seed';
import { seedPaciente } from './paciente.seed';

export const runAllSeeds = async () => {
    await seedObraSocial();
    await seedOrigen();
    await seedPaciente();
};
