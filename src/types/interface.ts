// пост
export interface IPost {
  _id: string;
  title: string;
  description: string;
  image: string;
  username: string;
  categories?: ICategory[];
  createdAt: Date;
}

//  категория
export interface ICategory {
  _id: string;
  name: string;
}

// пользователь
export interface IUser {
  __v?: number;
  _id: string;
  username: string;
  email: string;
  password?: string;
  profilePicture: string;
  createdAt: Date;
  updatedAt: Date;
}
