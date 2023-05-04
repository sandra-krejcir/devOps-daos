import { AuthService } from './auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private auService;
    constructor(auService: AuthService);
    validate(email: string, password: string): Promise<any>;
}
export {};
