import { Module } from '@nestjs/common';
import { ThemesController } from './themes.controller';

@Module({
  controllers: [ThemesController]
})
export class ThemesModule {}
