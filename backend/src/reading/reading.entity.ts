import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reading {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  panelId: number;

  @Column()
  timestamp: Date;

  @Column()
  temperature: number;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  irradiance: number;

  @Column()
  orientation: number;

  @Column()
  output: number;
}
