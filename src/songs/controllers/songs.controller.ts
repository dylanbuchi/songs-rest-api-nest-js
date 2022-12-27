import {
  BadRequestException,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Controller } from '@nestjs/common';
import { SongCreator, SongUpdater } from 'classes/Song';

import { SongsRepository } from 'songs/repositories/songs.repository';

const idParam = '/:id';
const idString = 'id';

@Controller('/v1/songs')
export class SongsController {
  constructor(private songsRepository: SongsRepository) {}

  @Get()
  async findAll() {
    return this.songsRepository.findAll();
  }

  @Get(idParam)
  async findOne(@Param(idString) id: string) {
    return this.songsRepository.findOne(id);
  }

  @Post()
  async createOne(@Body() song: SongCreator) {
    if (song._id) throw new BadRequestException('You must not set an id!');

    return this.songsRepository.createOne(song);
  }

  @Put(idParam)
  async updateOne(
    @Param(idString) id: string,
    @Body() updatedSong: SongUpdater,
  ) {
    if (updatedSong._id)
      throw new BadRequestException('You must not update the id!');

    return this.songsRepository.updateOne(id, updatedSong);
  }

  @Delete(idParam)
  async deleteOne(@Param(idString) id: string) {
    return this.songsRepository.deleteOne(id);
  }
}
