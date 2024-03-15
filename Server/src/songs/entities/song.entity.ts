import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  songname: string;

  @Column()
  band: string;

  @Column()
  year: number;
}
