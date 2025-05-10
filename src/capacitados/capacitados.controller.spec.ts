import { Test, TestingModule } from '@nestjs/testing';
import { CapacitadosController } from './capacitados.controller';

describe('CapacitadosController', () => {
  let controller: CapacitadosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CapacitadosController],
    }).compile();

    controller = module.get<CapacitadosController>(CapacitadosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
