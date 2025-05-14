import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Propietario } from '../../common/entities/propietario.entity';
import { PropietarioService } from './propietarios.service';
import { PropietarioController } from './propietarios.controller';

@Module({
  imports: [SequelizeModule.forFeature([Propietario])], // Register the Propietario model
  controllers: [PropietarioController],
  providers: [PropietarioService],
  exports: [PropietarioService], // Export if needed in other modules
})
export class PropietarioModule { }
