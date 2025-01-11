// Imports:
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from 'src/dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(
    private songService: SongsService,
    @Inject('CONNECTION') private connection: string,
  ) {
    console.log('CONNECTION --->', this.connection);
  }

  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songService.create(createSongDto); // This will add the song to
  }

  @Get()
  findAll(): CreateSongDto[] {
    return this.songService.findAll(); // This will return the array of songs
  }

  @Get(':id')
  findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.songService.findOne(id);
  }
}
