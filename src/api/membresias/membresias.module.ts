import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Membresia } from '../../common/entities/membresia.entity';
import { Sistema } from '../../common/entities/sistema.entity';
import { MembresiaService } from './membresias.service';
import { MembresiasController } from './membresias.controller';
import { Programa } from 'src/common/entities/programa.entity';

@Module({
    imports: [SequelizeModule.forFeature([Membresia, Sistema, Programa])],
    controllers: [MembresiasController],
    providers: [MembresiaService],
    exports: [MembresiaService],
})
export class MembresiasModule {}
