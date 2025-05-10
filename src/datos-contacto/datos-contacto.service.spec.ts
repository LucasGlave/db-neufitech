import { Test, TestingModule } from '@nestjs/testing';
import { DatosContactoService } from './datos-contacto.service';

describe('DatosContactoService', () => {
  let service: DatosContactoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatosContactoService],
    }).compile();

    service = module.get<DatosContactoService>(DatosContactoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
