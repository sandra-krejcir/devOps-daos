import { JwtService } from '@nestjs/jwt';
import { Profile } from 'src/profiles/profiles.schema';
import { ProfileService } from 'src/profiles/profiles.service';
export declare class AuthService {
    private prService;
    private jwtService;
    constructor(prService: ProfileService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    loginUser(user: Profile): Promise<{
        access_token: string;
        user: Profile;
    }>;
}
