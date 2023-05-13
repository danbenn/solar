import { Controller, Get } from '@nestjs/common';
import { PanelService } from './panel.service';

@Controller('api')
export class PanelController {
  constructor(private readonly panelService: PanelService) {}

  @Get('panels')
  findAll() {
    return this.panelService.findAll();
  }
}
