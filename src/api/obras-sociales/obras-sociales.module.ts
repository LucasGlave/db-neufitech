import { Module } from '@nestjs/common';
import { ObrasSocialesService } from './obras-sociales.service';

@Module({
  providers: [ObrasSocialesService]
})
export class ObrasSocialesModule {}
