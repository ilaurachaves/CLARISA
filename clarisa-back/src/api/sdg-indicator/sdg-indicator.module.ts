import { Module } from '@nestjs/common';
import { SdgIndicatorService } from './sdg-indicator.service';
import { SdgIndicatorController } from './sdg-indicator.controller';
import { SdgIndicatorRepository } from './repositories/sdg-indicator.repository';

@Module({
  controllers: [SdgIndicatorController],
  providers: [SdgIndicatorService, SdgIndicatorRepository],
})
export class SdgIndicatorModule {}
