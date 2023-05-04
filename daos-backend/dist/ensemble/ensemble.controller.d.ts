import { Request } from 'express';
import { Ensemble } from './ensemble.schema';
import { EnsembleService } from './ensebmle.service';
export declare class ProfilesController {
    private readonly enService;
    constructor(enService: EnsembleService);
    getEnsembles(request: Request): Promise<Ensemble[]>;
    createEnsemble(body: any): Promise<Ensemble & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
