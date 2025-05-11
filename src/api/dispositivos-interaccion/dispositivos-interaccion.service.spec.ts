import { Test, TestingModule } from '@nestjs/testing';
import { DispositivosInteraccionService } from './dispositivos-interaccion.service';

describe('DispositivosInteraccionService', () => {
  let service: DispositivosInteraccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DispositivosInteraccionService],
    }).compile();

    service = module.get<DispositivosInteraccionService>(DispositivosInteraccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
