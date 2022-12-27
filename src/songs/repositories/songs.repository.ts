import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongCreator, SongUpdater } from 'classes/Song';
import { Model } from 'mongoose';

@Injectable()
export class SongsRepository {
  constructor(@InjectModel('Song') private songModel: Model<Song>) {}

  async findAll(): Promise<Song[]> {
    return this.songModel.find();
  }

  async findOne(id: string): Promise<Song> {
    return this.songModel.findById(id);
  }

  async createOne(song: SongCreator): Promise<Song> {
    return this.songModel.create(song);
  }

  async updateOne(id: string, updatedSong: SongUpdater): Promise<Song> {
    return this.songModel.findByIdAndUpdate(id, updatedSong);
  }

  async deleteOne(id: string): Promise<Song> {
    return this.songModel.findByIdAndDelete(id);
  }
}
