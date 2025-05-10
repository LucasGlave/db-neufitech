import { Test, TestingModule } from '@nestjs/testing';
import { DuenoService } from './duenos.service';

describe('DuenoService', () => {
  let service: DuenoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DuenoService],
    }).compile();

    service = module.get<DuenoService>(DuenoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
