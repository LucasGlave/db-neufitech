import { Test, TestingModule } from '@nestjs/testing';
import { DispositivosInteraccionController } from './dispositivos-interaccion.controller';

describe('DispositivosInteraccionController', () => {
  let controller: DispositivosInteraccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DispositivosInteraccionController],
    }).compile();

    controller = module.get<DispositivosInteraccionController>(DispositivosInteraccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
