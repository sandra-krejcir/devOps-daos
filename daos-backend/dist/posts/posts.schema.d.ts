import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Profile } from 'src/profiles/profiles.schema';
export type PostDocument = Posts & Document;
export declare class Posts {
    title: string;
    author: Profile;
    instrument: string;
    searchType: string;
    location: string;
    description: string;
    dateOfCreation: Date;
}
export declare const PostSchema: mongoose.Schema<Posts, mongoose.Model<Posts, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Posts>;
