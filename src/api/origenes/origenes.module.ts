import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Origen } from '../../common/entities/origen.entity';
import { OrigenService } from './origenes.service';

@Module({
  imports: [SequelizeModule.forFeature([Origen])],
  providers: [OrigenService],
  exports: [OrigenService],
})
export class OrigenesModule { }
