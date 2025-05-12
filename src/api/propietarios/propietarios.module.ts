import { Module } from '@nestjs/common';
import { PropietarioService } from './propietarios.service';

@Module({
  providers: [PropietarioService]
})
export class PropietarioModule { }
