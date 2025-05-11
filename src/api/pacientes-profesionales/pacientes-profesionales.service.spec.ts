import { Test, TestingModule } from '@nestjs/testing';
import { TablaPacienteProfesionalService } from './pacientes-profesionales.service';

describe('TablaPacienteProfesionalService', () => {
  let service: TablaPacienteProfesionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TablaPacienteProfesionalService],
    }).compile();

    service = module.get<TablaPacienteProfesionalService>(TablaPacienteProfesionalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
