import { Injectable } from '@nestjs/common';

@Injectable()
export class PanelService {
  findAll() {
    return `This action returns all panel`;
  }
}
