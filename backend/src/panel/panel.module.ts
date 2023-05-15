import { Module } from '@nestjs/common';
import { PanelService } from './panel.service';
import { PanelController } from './panel.controller';
import { Panel } from './panel.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Panel])],
  controllers: [PanelController],
  providers: [PanelService],
})
export class PanelModule {}
