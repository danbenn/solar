import { ReadingDto } from './reading.dto';
import { ReadingService } from './reading.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('api')
export class ReadingController {
  constructor(private readonly service: ReadingService) {}

  @Post('readings')
  async updatePanelMetrics(@Body() readings: ReadingDto[]) {
    await this.service.insertFromPayload(readings);
  }
}
