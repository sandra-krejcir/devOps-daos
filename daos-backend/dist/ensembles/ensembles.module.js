"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnsembleModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ensembles_controller_1 = require("./ensembles.controller");
const ensembles_schema_1 = require("./ensembles.schema");
const ensembles_service_1 = require("./ensembles.service");
let EnsembleModule = class EnsembleModule {
};
EnsembleModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: ensembles_schema_1.Ensemble.name, schema: ensembles_schema_1.EnsembleSchema },
            ]),
        ],
        providers: [ensembles_service_1.EnsembleService],
        controllers: [ensembles_controller_1.EnsembleController],
    })
], EnsembleModule);
exports.EnsembleModule = EnsembleModule;
//# sourceMappingURL=ensembles.module.js.map