import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TipoDispositivo } from '../../common/entities/tipoDispositivo.entity';
import { TipoDispositivoService } from './tipos-dispositivos.service';

@Module({
  imports: [SequelizeModule.forFeature([TipoDispositivo])],
  providers: [TipoDispositivoService],
  exports: [TipoDispositivoService],
})
export class TiposDispositivosModule { }
