import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Capacitador } from '../../common/entities/capacitador.entity';
import { CapacitadorService } from './capacitadores.service';
import { CapacitadorController } from './capacitadores.controller';

@Module({
    imports: [SequelizeModule.forFeature([Capacitador])],
    controllers: [CapacitadorController],
    providers: [CapacitadorService],
    exports: [CapacitadorService],
})
export class CapacitadoresModule {}
