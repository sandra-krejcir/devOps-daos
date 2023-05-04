import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { PostService } from './posts/posts.service';
import { ProfileService } from './profiles/profiles.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly pService: PostService,
    private readonly prService: ProfileService,
    private auService: AuthService,
  ) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello World' };
    //return { nameOfProperyWithArray: [{title: "fdajklæf"}, ...] };
  }
}
