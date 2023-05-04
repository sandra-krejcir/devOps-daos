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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const profiles_schema_1 = require("./profiles.schema");
let ProfileService = class ProfileService {
    constructor(prModel) {
        this.prModel = prModel;
    }
    getProfiles() {
        return this.prModel.find().exec();
    }
    getSpecificProfile(id) {
        return this.prModel.findOne({ _id: id }).exec();
    }
    async validateProfile(body) {
        const profile = await this.prModel.findOne({ email: body.email });
        if (profile) {
            console.log('validate email signup', profile);
            throw new common_1.HttpException('This email is already used!', 403);
        }
        return this.createProfile(body);
    }
    createProfile(profile) {
        const savedProfile = new this.prModel(profile);
        return savedProfile.save();
    }
    deleteProfile(id) {
        return this.prModel.deleteOne({ _id: id });
    }
    updateProfile(id, profile) {
        return this.prModel.updateOne({ _id: id }, profile);
    }
    async findUser(email) {
        return this.prModel.findOne({ email: email });
    }
    async findEmail(user) {
        const searchedEmail = await this.prModel.findOne({ email: user.email });
        if (searchedEmail)
            throw new common_1.HttpException('Email unavailable', 200);
        throw new common_1.HttpException('Email available', 200);
    }
};
ProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(profiles_schema_1.Profile.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profiles.service.js.map