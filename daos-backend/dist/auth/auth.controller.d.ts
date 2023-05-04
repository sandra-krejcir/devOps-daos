import { AuthService } from './auth.service';
export declare class AuthController {
    private auService;
    constructor(auService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        user: import("../profiles/profiles.schema").Profile;
    }>;
}
