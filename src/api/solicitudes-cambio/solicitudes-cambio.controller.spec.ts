import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudesCambioController } from './solicitudes-cambio.controller';

describe('SolicitudesCambioController', () => {
  let controller: SolicitudesCambioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitudesCambioController],
    }).compile();

    controller = module.get<SolicitudesCambioController>(SolicitudesCambioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
