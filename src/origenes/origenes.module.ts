import { Module } from '@nestjs/common';
import { OrigenesService } from './origenes.service';

@Module({
  providers: [OrigenesService]
})
export class OrigenesModule {}
