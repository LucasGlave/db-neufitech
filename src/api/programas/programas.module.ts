import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Programa } from '../../common/entities/programa.entity';
import { ProgramaService } from './programas.service';
import { ProgramaController } from './programas.controller'; // Import the controller

@Module({
    imports: [SequelizeModule.forFeature([Programa])],
    controllers: [ProgramaController], // Register the controller
    providers: [ProgramaService],
    exports: [ProgramaService],
})
export class ProgramasModule {}
