import { seedObraSocial } from './obra-social.seed';
import { seedOrigen } from './origen.seed';
import { seedPaciente } from './paciente.seed';
import { seedPrograma } from './programa.seed';
import { seedSistema } from './sistema.seed';

export const runAllSeeds = async () => {
    await seedObraSocial();
    await seedOrigen();
    await seedPaciente();
    await seedPrograma();
    await seedSistema();
};
