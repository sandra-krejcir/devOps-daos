import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Profile } from 'src/profiles/profiles.schema';
export type EnsembleDocument = Ensemble & Document;
export declare class Ensemble {
    name: string;
    capacity: string;
    description: string;
    email: string;
    location: string;
    creator: Profile;
    members: Profile[];
}
export declare const EnsembleSchema: mongoose.Schema<Ensemble, mongoose.Model<Ensemble, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Ensemble>;
