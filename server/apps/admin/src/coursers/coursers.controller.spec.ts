import { Test, TestingModule } from '@nestjs/testing';
import { CoursersController } from './coursers.controller';

describe('Coursers Controller', () => {
  let controller: CoursersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursersController],
    }).compile();

    controller = module.get<CoursersController>(CoursersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
