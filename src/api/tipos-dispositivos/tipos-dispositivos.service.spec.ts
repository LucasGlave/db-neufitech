import { Test, TestingModule } from '@nestjs/testing';
import { TiposDispositivosService } from './tipos-dispositivos.service';

describe('TiposDispositivosService', () => {
  let service: TiposDispositivosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiposDispositivosService],
    }).compile();

    service = module.get<TiposDispositivosService>(TiposDispositivosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
