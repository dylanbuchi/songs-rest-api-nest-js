import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsInt, IsBoolean, IsMongoId } from 'class-validator';

export class Song {
  @IsString()
  @IsMongoId()
  _id: string;

  @IsString() title: string;
  @IsString() artist: string;
  @IsString() genre: string;

  @IsBoolean() favorite?: boolean;
  @IsInt() year: number;
}

export class SongUpdater extends PartialType(Song) {}
export class SongCreator extends PartialType(Song) {}
