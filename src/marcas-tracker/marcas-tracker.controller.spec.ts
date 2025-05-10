import { Test, TestingModule } from '@nestjs/testing';
import { MarcasTrackerController } from './marcas-tracker.controller';

describe('MarcasTrackerController', () => {
  let controller: MarcasTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarcasTrackerController],
    }).compile();

    controller = module.get<MarcasTrackerController>(MarcasTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
