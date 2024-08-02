export interface PostInterface {
    _id?: string,
    userId: number;
    username: string;
    usertag: string;
    tweet: string;
    postTime?: Date; 
    comment?: string[];
    retweet?: string[];
    like?: string[];
    view?: string[];
  }