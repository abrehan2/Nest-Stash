// Imports:
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSongDto } from 'src/dto/create-song-dto';

@Injectable()
export class SongsService {
  private readonly songs: CreateSongDto[] = [];

  create(song: CreateSongDto): CreateSongDto[] {
    this.songs.push(song);
    return this.songs;
  }

  findAll(): CreateSongDto[] {
    try {
      return this.songs;
    } catch (e) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e.message,
        },
      );
    }
  }

  findOne(id: number): CreateSongDto {
    try {
      return this.songs[id];
    } catch (e) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: e.message,
        },
      );
    }
  }
}
