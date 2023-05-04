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
exports.EnsembleController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const ensembles_service_1 = require("./ensembles.service");
let EnsembleController = class EnsembleController {
    constructor(enService) {
        this.enService = enService;
    }
    getEnsembles() {
        return this.enService.findAll();
    }
    createEnsemble(body) {
        return this.enService.validateEnsemble(body);
    }
    checkEnsembleExist(name) {
        return this.enService.findEnsemble(name);
    }
    addEnsembleMember(id, profile) {
        return this.enService.addEnsembleMember(id, profile);
    }
    deleteEnsembleMember(id, memberId) {
        console.log('member', memberId);
        console.log('ensemble id', id);
        return this.enService.deleteEnsembleMember(id, memberId);
    }
    deleteEnsemble(id) {
        return this.enService.deleteEnsemble(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EnsembleController.prototype, "getEnsembles", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EnsembleController.prototype, "createEnsemble", null);
__decorate([
    (0, common_1.Post)('/validate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EnsembleController.prototype, "checkEnsembleExist", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/:id/members'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EnsembleController.prototype, "addEnsembleMember", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id/members/:memberId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('memberId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EnsembleController.prototype, "deleteEnsembleMember", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EnsembleController.prototype, "deleteEnsemble", null);
EnsembleController = __decorate([
    (0, common_1.Controller)('ensambles'),
    __metadata("design:paramtypes", [ensembles_service_1.EnsembleService])
], EnsembleController);
exports.EnsembleController = EnsembleController;
//# sourceMappingURL=ensembles.controller.js.map