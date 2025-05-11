import { seedObraSocial } from './obra-social.seed';

export const runAllSeeds = async () => {
    await seedObraSocial();
};
