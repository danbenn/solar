import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadingModule } from './reading/reading.module';
import { Reading } from './reading/reading.entity';
import { PanelModule } from './panel/panel.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'solar.db',
      entities: [Reading],
      synchronize: true,
    }),
    ReadingModule,
    PanelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
