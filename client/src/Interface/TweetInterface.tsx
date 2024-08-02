import { AccountInterface} from "./AccountInterface"

export interface TweetInterface {
    _id: string,
    userId: string,
    tweet: string,
    postTime: Date, 
    like? : AccountInterface[],
    retweet?: TweetInterface[],
    comment? : TweetInterface[],
    view?: AccountInterface[]
}