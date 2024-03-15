import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from '../songs/entities/song.entity'; // Adjust this path if necessary
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [TypeOrmModule.forFeature([Song])],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
