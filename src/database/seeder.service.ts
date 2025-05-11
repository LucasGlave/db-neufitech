import { Injectable, OnModuleInit } from '@nestjs/common';
import { runAllSeeds } from './seeds';

@Injectable()
export class SeederService implements OnModuleInit {
    async onModuleInit() {
        console.log('[...] Running database seeders');
        await runAllSeeds();
    }
}
