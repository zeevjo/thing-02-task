import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private usersRepository: Repository<Song>,
  ) {}

  create(createSongDto: CreateSongDto) {
    const newUser = this.usersRepository.create(createSongDto);
    this.usersRepository.save(newUser);
    return newUser;
  }

  findAll() {
    return this.usersRepository.find({
      order: {
        band: 'ASC',
      },
    });
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return this.usersRepository.update(id, updateSongDto);
  }

  remove(id: number) {
    return this.usersRepository.delete(id);
  }

  clear(){
    return this.usersRepository.clear();
  }
}
