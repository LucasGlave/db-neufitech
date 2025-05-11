import { Test, TestingModule } from '@nestjs/testing';
import { ObrasSocialesController } from './obras-sociales.controller';

describe('ObrasSocialesController', () => {
  let controller: ObrasSocialesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObrasSocialesController],
    }).compile();

    controller = module.get<ObrasSocialesController>(ObrasSocialesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
