import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { PostService } from './posts/posts.service';
import { ProfileService } from './profiles/profiles.service';
export declare class AppController {
    private readonly appService;
    private readonly pService;
    private readonly prService;
    private auService;
    constructor(appService: AppService, pService: PostService, prService: ProfileService, auService: AuthService);
    root(): {
        message: string;
    };
}
