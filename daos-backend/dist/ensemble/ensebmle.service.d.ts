import { Model } from 'mongoose';
import { Ensemble, EnsembleDocument } from './ensemble.schema';
import { ProfileDocument } from './profiles.schema';
export declare class EnsembleService {
    private enModel;
    private prModel;
    constructor(enModel: Model<EnsembleDocument>, prModel: Model<ProfileDocument>);
    getEnsembles(): Promise<Ensemble[]>;
    createEnsemble(ensemble: any): Promise<Ensemble & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
