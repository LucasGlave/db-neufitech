import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dispositivo } from '../../common/entities/dispositivo.entity';
import { DispositivoService } from './dispositivos.service';
import { DispositivosController } from './dispositivos.controller';

@Module({
    imports: [SequelizeModule.forFeature([Dispositivo])],
    controllers: [DispositivosController],
    providers: [DispositivoService],
    exports: [DispositivoService],
})
export class DispositivosModule {}
