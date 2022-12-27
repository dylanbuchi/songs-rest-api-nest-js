import { Song } from 'classes/Song';
import { Schema } from 'mongoose';

export const SongsSchema = new Schema<Song>({
  title: { type: String, required: true },
  artist: { type: String, required: true },

  genre: { type: String, required: true },
  year: { type: Number, required: true },

  favorite: {
    type: Boolean,
    default: false,
  },
});
