import mongoose, { Document } from 'mongoose';
import { Profile } from 'src/profiles/profiles.schema';
export declare type EnsembleDocument = Ensemble & Document;
export declare class Ensemble {
    name: string;
    creator: string;
    profiles: Profile[];
}
export declare const EnsembleSchema: mongoose.Schema<Ensemble, mongoose.Model<Ensemble, any, any, any, any>, {}, {}, {}, {}, "type", Ensemble>;
