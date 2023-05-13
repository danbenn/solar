import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reading } from 'src/reading/reading.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReadingService {
  constructor(
    @InjectRepository(Reading)
    private readingsRepository: Repository<Reading>,
  ) {}

  async insertFromPayload(readings) {
    // Normally it would be better to separate the interface for the API and the interface
    // data model. But for convenience we can make them the same here.
    await this.readingsRepository
      .createQueryBuilder()
      .insert()
      .values(readings)
      .execute();
  }
}
