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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const auth_service_1 = require("./auth/auth.service");
const posts_service_1 = require("./posts/posts.service");
const profiles_service_1 = require("./profiles/profiles.service");
let AppController = class AppController {
    constructor(appService, pService, prService, auService) {
        this.appService = appService;
        this.pService = pService;
        this.prService = prService;
        this.auService = auService;
    }
    root() {
        return { message: 'Hello World' };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "root", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        posts_service_1.PostService,
        profiles_service_1.ProfileService,
        auth_service_1.AuthService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map