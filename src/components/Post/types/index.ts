import { User } from "types/user";

export interface Post {
  id: string;
  userId: string;
  user: User;
  caption: string;
  locationTag?: string;
  createdTime: number;
  imageUrls: string[];
  likes: Like[];
  comments: Comment[];
}

export interface Like {
  id: string;
  userId: string;
  user: User;
  createdTime: number;
}

export interface Comment {
  id: string;
  userId: string;
  user: User;
  text: string;
  createdTime: number;
  parentId?: number;
  children?: Comment[];
}
