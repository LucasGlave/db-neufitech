import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ObraSocial } from '../../common/entities/obraSocial.entity';
import { ObraSocialService } from './obras-sociales.service';
import { ObrasSocialesController } from './obras-sociales.controller';

@Module({
    imports: [SequelizeModule.forFeature([ObraSocial])],
    providers: [ObraSocialService],
    controllers: [ObrasSocialesController],
    exports: [ObraSocialService],
})
export class ObrasSocialesModule {}
