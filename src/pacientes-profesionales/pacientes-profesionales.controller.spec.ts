import { Test, TestingModule } from '@nestjs/testing';
import { TablaPacienteProfesionalController } from './pacientes-profesionales.controller';

describe('TablaPacienteProfesionalController', () => {
  let controller: TablaPacienteProfesionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TablaPacienteProfesionalController],
    }).compile();

    controller = module.get<TablaPacienteProfesionalController>(TablaPacienteProfesionalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
