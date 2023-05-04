"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsembleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ensemble_schema_1 = require("./ensemble.schema");
const profiles_schema_1 = require("./profiles.schema");
let EnsembleService = class EnsembleService {
    constructor(enModel, prModel) {
        this.enModel = enModel;
        this.prModel = prModel;
    }
    async getEnsembles() {
        return this.enModel.find().populate('profiles');
    }
    createEnsemble(ensemble) {
        const creatorId = ensemble.creatorId;
        const profile = this.prModel.findById(creatorId);
        ensemble.creator = profile;
        const savedPost = new this.enModel(ensemble);
        return savedPost.save();
    }
};
EnsembleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ensemble_schema_1.Ensemble.name)),
    __param(1, (0, mongoose_1.InjectModel)(profiles_schema_1.Profile.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], EnsembleService);
exports.EnsembleService = EnsembleService;
//# sourceMappingURL=ensebmle.service.js.map