import { Module } from '@nestjs/common';
import { CoursersController } from './coursers.controller';

@Module({
  controllers: [CoursersController]
})
export class CoursersModule {}
