export interface PostInterface {
    _id?: string,
    userId: number;
    username: string;
    usertag: string;
    postTime: string;
    tweet: string;
    comment?: string[];
    retweet?: string[];
    like?: string[];
    view?: string[];
  }