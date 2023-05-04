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
exports.ProfilesController = void 0;
const common_1 = require("@nestjs/common");
const ensebmle_service_1 = require("./ensebmle.service");
let ProfilesController = class ProfilesController {
    constructor(enService) {
        this.enService = enService;
    }
    async getEnsembles(request) {
        console.log(request);
        const result = await this.enService.getEnsembles();
        console.log(result);
        return result;
    }
    createEnsemble(body) {
        return this.enService.createEnsemble(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProfilesController.prototype, "getEnsembles", null);
__decorate([
    (0, common_1.Post)('/:id/members'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProfilesController.prototype, "createEnsemble", null);
ProfilesController = __decorate([
    (0, common_1.Controller)('ensemble'),
    __metadata("design:paramtypes", [ensebmle_service_1.EnsembleService])
], ProfilesController);
exports.ProfilesController = ProfilesController;
//# sourceMappingURL=ensemble.controller.js.map