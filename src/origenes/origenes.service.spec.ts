import { Test, TestingModule } from '@nestjs/testing';
import { OrigenesService } from './origenes.service';

describe('OrigenesService', () => {
  let service: OrigenesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrigenesService],
    }).compile();

    service = module.get<OrigenesService>(OrigenesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
