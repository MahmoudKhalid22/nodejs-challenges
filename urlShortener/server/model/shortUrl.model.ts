import mongoose, { Document } from "mongoose";
import { nanoid } from "nanoid";

export interface ShortUrl extends Document {
  shortId: string;
  destination: string;
}

const schema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: {
    type: String,
    required: true,
  },
});

const shortUrl = mongoose.model<ShortUrl>("shortUrl", schema);

export default shortUrl;
