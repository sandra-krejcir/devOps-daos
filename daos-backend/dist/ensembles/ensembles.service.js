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
const ensembles_schema_1 = require("./ensembles.schema");
let EnsembleService = class EnsembleService {
    constructor(enModel) {
        this.enModel = enModel;
    }
    async findAll() {
        return this.enModel.find().populate('creator').populate('members');
    }
    async validateEnsemble(body) {
        const ensemble = await this.enModel.findOne({ name: body.name });
        if (ensemble) {
            console.log('validate ensemble', ensemble);
            throw new common_1.HttpException('This ensemble already exists!', 403);
        }
        return this.createEnsemble(body);
    }
    createEnsemble(ensemble) {
        const createdEnsemble = new this.enModel(ensemble);
        return createdEnsemble.save();
    }
    async addEnsembleMember(id, member) {
        const updatedEnsemble = await this.enModel.findById(id);
        const searchedMember = updatedEnsemble.members.find((profile) => {
            console.log('this is the id', profile.toString());
            if (profile.toString() === member._id) {
                return profile;
            }
        });
        if (searchedMember) {
            console.log('validate member', searchedMember);
            throw new common_1.HttpException('You are already a part of this ensemble!', 403);
        }
        else {
            console.log(searchedMember);
            updatedEnsemble.members.push(member);
            return updatedEnsemble.save();
        }
    }
    async deleteEnsembleMember(id, memberId) {
        const filteredEnsemble = await this.enModel.findById(id);
        const filteredMembers = filteredEnsemble.members.filter((profile) => {
            return profile.toString() !== memberId;
        });
        filteredEnsemble.members = filteredMembers;
        return filteredEnsemble.save();
    }
    async findEnsemble(ensemble) {
        const searchedEnsemble = await this.enModel.findOne({
            name: ensemble.name,
        });
        if (searchedEnsemble) {
            throw new common_1.HttpException('Name unavailable', 200);
        }
        throw new common_1.HttpException('Name available', 200);
    }
    deleteEnsemble(id) {
        return this.enModel.deleteOne({ _id: id });
    }
};
EnsembleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ensembles_schema_1.Ensemble.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EnsembleService);
exports.EnsembleService = EnsembleService;
//# sourceMappingURL=ensembles.service.js.map