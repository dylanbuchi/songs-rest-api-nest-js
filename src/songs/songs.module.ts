import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SongsSchema } from './schemas/songs.schema';
import { SongsRepository } from './repositories/songs.repository';
import { SongsController } from './controllers/songs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongsSchema }])],
  controllers: [SongsController],
  providers: [SongsRepository],
})
export class SongsModule {}
