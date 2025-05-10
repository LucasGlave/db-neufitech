import { Test, TestingModule } from '@nestjs/testing';
import { TiposDispositivosController } from './tipos-dispositivos.controller';

describe('TiposDispositivosController', () => {
  let controller: TiposDispositivosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiposDispositivosController],
    }).compile();

    controller = module.get<TiposDispositivosController>(TiposDispositivosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
