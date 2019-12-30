import { Test, TestingModule } from '@nestjs/testing';
import { RdbService } from './rdb.service';

describe('RdbService', () => {
  let service: RdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RdbService],
    }).compile();

    service = module.get<RdbService>(RdbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
