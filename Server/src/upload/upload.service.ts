import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import * as csvWriter from 'fast-csv';
import { Song } from '../songs/entities/song.entity';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
  ) {}

  async processAndStoreFile(filePath: string): Promise<void> {
    const songs: Partial<Song>[] = [];

    /**
     * Create a promise to handle the asynchronous nature of streams
     */
    await new Promise<void>((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csvParser({ separator: ';' }))
        .on('data', (data) => {
          /**
           * Convert each field to lowercase
           */
          const lowerCaseData: Partial<Song> = {
            songname: data['Song Name'] ? data['Song Name'].toLowerCase() : '',
            band: data['Band'] ? data['Band'].toLowerCase() : '',
            year: data['Year'] ? parseInt(data['Year'], 10) : null,
          };
          songs.push(lowerCaseData);
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => reject(error));
    });

    /**
     * re-write the csv file to lower case letters
     */
    await new Promise<void>((resolve, reject) => {
      const writeStream = fs.createWriteStream(filePath);
      csvWriter
        .writeToStream(writeStream, songs, { headers: true, delimiter: ';' })
        .on('finish', () => resolve())
        .on('error', (error) => reject(error));
    });

    /**
     * Save the processed songs to the database
     */
    for (const song of songs) {
      await this.songRepository.save(song);
    }
  }
}
