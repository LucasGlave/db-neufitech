import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dispositivo } from '../../common/entities/dispositivo.entity';
import { DispositivoService } from './dispositivos.service';
import { DispositivosController } from './dispositivos.controller';

@Module({
    imports: [SequelizeModule.forFeature([Dispositivo])],
    providers: [DispositivoService],
    exports: [DispositivoService],
    controllers: [DispositivosController],
})
export class DispositivosModule {}
