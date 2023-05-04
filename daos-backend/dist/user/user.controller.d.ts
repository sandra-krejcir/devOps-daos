import { UserService } from './user.service';
import { Request } from 'express';
import { User } from './user.schema';
export declare class UserController {
    private readonly uService;
    constructor(uService: UserService);
    getUser(request: Request, body: any): Promise<User>;
}
