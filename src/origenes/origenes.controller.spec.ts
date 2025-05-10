import { Test, TestingModule } from '@nestjs/testing';
import { OrigenesController } from './origenes.controller';

describe('OrigenesController', () => {
  let controller: OrigenesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrigenesController],
    }).compile();

    controller = module.get<OrigenesController>(OrigenesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
