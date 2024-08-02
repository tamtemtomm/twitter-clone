export interface PostInterface {
    _id?: string,
    userId: string;
    username: string;
    usertag: string;
    tweet: string;
    postTime?: Date; 
    comment?: string[];
    retweet?: string[];
    like?: string[];
    view?: string[];
  }