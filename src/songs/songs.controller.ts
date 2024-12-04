import { Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Post()
  create() {
    return this.songService.create('Despacito'); // This will add the song to
  }

  @Get()
  findAll(): string[] {
    return this.songService.findAll(); // This will return the array of songs
  }

  @Get(':id')
  findOne(): string {
    return 'This action returns a song based on id.';
  }
}
