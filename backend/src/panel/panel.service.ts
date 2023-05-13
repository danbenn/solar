import { Injectable } from '@nestjs/common';
import { Panel } from './panel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PanelService {
  constructor(
    @InjectRepository(Panel)
    private respository: Repository<Panel>,
  ) {}

  findAll() {
    return this.respository.find();
  }
}
