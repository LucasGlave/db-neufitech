import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Membresia } from '../../common/entities/membresia.entity';
import { MembresiaService } from './membresias.service';

@Module({
  imports: [SequelizeModule.forFeature([Membresia])],
  providers: [MembresiaService],
  exports: [MembresiaService],
})
export class MembresiasModule { }
