import mongoose, { Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface ShortUrl extends Document {
  shortId: string;
  destination: string;
}

const urlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => uuidv4(),
  },
  destination: {
    type: String,
    required: true,
  },
});

const urlShorter = mongoose.model<ShortUrl>("urlShorter", urlSchema);

export default urlShorter;
