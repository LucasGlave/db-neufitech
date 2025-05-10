import { Test, TestingModule } from '@nestjs/testing';
import { MarcasTrackerService } from './marcas-tracker.service';

describe('MarcasTrackerService', () => {
  let service: MarcasTrackerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarcasTrackerService],
    }).compile();

    service = module.get<MarcasTrackerService>(MarcasTrackerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
