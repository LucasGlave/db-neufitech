import { Test, TestingModule } from '@nestjs/testing';
import { CapacitadosService } from './capacitados.service';

describe('CapacitadosService', () => {
  let service: CapacitadosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CapacitadosService],
    }).compile();

    service = module.get<CapacitadosService>(CapacitadosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
