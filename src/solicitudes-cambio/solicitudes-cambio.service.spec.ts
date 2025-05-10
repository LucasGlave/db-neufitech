import { Test, TestingModule } from '@nestjs/testing';
import { SolicitudesCambioService } from './solicitudes-cambio.service';

describe('SolicitudesCambioService', () => {
  let service: SolicitudesCambioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitudesCambioService],
    }).compile();

    service = module.get<SolicitudesCambioService>(SolicitudesCambioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
