import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TipoDispositivo } from '../../common/entities/tipoDispositivo.entity';
import { TipoDispositivoService } from './tipos-dispositivos.service';
import { TipoDispositivoController } from './tipos-dispositivos.controller';

@Module({
    imports: [SequelizeModule.forFeature([TipoDispositivo])],
    controllers: [TipoDispositivoController],
    providers: [TipoDispositivoService],
    exports: [TipoDispositivoService],
})
export class TiposDispositivosModule {}
