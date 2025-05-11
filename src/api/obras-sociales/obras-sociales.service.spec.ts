import { Test, TestingModule } from '@nestjs/testing';
import { ObrasSocialesService } from './obras-sociales.service';

describe('ObrasSocialesService', () => {
  let service: ObrasSocialesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObrasSocialesService],
    }).compile();

    service = module.get<ObrasSocialesService>(ObrasSocialesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
