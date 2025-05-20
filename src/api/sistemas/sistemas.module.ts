import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sistema } from '../../common/entities/sistema.entity';
import { SistemaService } from './sistemas.service';
import { SistemaController } from './sistemas.controller';

@Module({
    imports: [SequelizeModule.forFeature([Sistema])],
    controllers: [SistemaController],
    providers: [SistemaService],
    exports: [SistemaService],
})
export class SistemasModule {}
