/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Request } from 'express';
import { Profile } from './../profiles/profiles.schema';
import { ProfileService } from './../profiles/profiles.service';
export declare class ProfilesController {
    private readonly prService;
    constructor(prService: ProfileService);
    getProfiles(request: Request): Promise<Profile[]>;
    getProfile(id: string, request: Request): Promise<Profile>;
    createProfile(body: any): Promise<Profile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    checkEmailExist(email: string): Promise<any>;
    deleteProfile(id: string): import("mongoose").Query<import("mongodb").DeleteResult, Profile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./../profiles/profiles.schema").ProfileDocument>;
    updateProfile(id: string, body: any): import("mongoose").Query<import("mongodb").UpdateResult, Profile & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./../profiles/profiles.schema").ProfileDocument>;
}
