import { Test, TestingModule } from '@nestjs/testing';
import { DatosContactoController } from './datos-contacto.controller';

describe('DatosContactoController', () => {
  let controller: DatosContactoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatosContactoController],
    }).compile();

    controller = module.get<DatosContactoController>(DatosContactoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
