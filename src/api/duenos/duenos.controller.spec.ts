import { Test, TestingModule } from '@nestjs/testing';
import { DuenoController } from './duenos.controller';

describe('DuenoController', () => {
  let controller: DuenoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DuenoController],
    }).compile();

    controller = module.get<DuenoController>(DuenoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
