import { Module } from '@nestjs/common';
import { CredencialService } from './credenciales.service';

@Module({
  providers: [CredencialService]
})
export class CredencialModule { }
