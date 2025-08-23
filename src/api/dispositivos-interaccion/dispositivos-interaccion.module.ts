import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { DispositivoDeInteraccion } from '../../common/entities/dispositivoInteraccion.entity';
import { DispositivoInteraccionService } from './dispositivos-interaccion.service';
import { DispositivosInteraccionController } from './dispositivos-interaccion.controller';

@Module({
    imports: [SequelizeModule.forFeature([DispositivoDeInteraccion])],
    controllers: [DispositivosInteraccionController],
    providers: [DispositivoInteraccionService],
    exports: [DispositivoInteraccionService],
})
export class DispositivosInteraccionModule {}
