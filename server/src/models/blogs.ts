import { Document, model, Schema } from 'mongoose';

export interface IBlog extends Document {
  createdAt: Date;
  updatedAt: Date;
  postTitle: string;
  postData: string;
  isPublished: boolean;
  isDeleted: boolean;
}

const blogsSchema = new Schema<IBlog>({
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  },
  postTitle: {
    type: String,
    required: true,
  },
  postData: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
    default: () => true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
    default: () => false,
  },
});

export const Blogs = model<IBlog>('blogs', blogsSchema);
