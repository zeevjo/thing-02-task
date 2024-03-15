import { Controller, Post, UseInterceptors, UploadedFile, Get } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';


const storage = diskStorage({
  // Destination is a function that determines the folder where the file should be saved
  destination: './src/public', 
  filename: (req, file, callback) => {
    const uniqueName = `${Date.now()}-${Math.random() * 1E9}${extname(file.originalname)}`;
    callback(null, uniqueName);
  },
});


@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file' , { storage }))
  async handleFileUpload(@UploadedFile() file: Express.Multer.File) {

    //here i whant to save  IN the publice fulder

    //then send the path to this.uploadService.processAndStoreFile(file.path);
    console.log("file", file.path);
    
    await this.uploadService.processAndStoreFile(file.path);
    return { message: 'File processed and stored successfully' };
  }
}
