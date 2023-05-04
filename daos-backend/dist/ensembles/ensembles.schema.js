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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsembleSchema = exports.Ensemble = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
const profiles_schema_1 = require("../profiles/profiles.schema");
let Ensemble = class Ensemble {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Ensemble.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Ensemble.prototype, "capacity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Ensemble.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ensemble.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ensemble.prototype, "location", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: profiles_schema_1.Profile.name }],
    }),
    __metadata("design:type", profiles_schema_1.Profile)
], Ensemble.prototype, "creator", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: profiles_schema_1.Profile.name }],
    }),
    __metadata("design:type", Array)
], Ensemble.prototype, "members", void 0);
Ensemble = __decorate([
    (0, mongoose_1.Schema)()
], Ensemble);
exports.Ensemble = Ensemble;
exports.EnsembleSchema = mongoose_1.SchemaFactory.createForClass(Ensemble);
//# sourceMappingURL=ensembles.schema.js.map