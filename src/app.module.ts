import { Module } from '@nestjs/common';
import { SongsModule } from './songs/songs.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    SongsModule,
  ],
})
export class AppModule {}
