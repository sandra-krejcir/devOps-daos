import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EnsembleModule } from './ensembles/ensembles.module';
import { PostsModule } from './posts/posts.module';
import { ProfileModule } from './profiles/profiles.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://bob:cphwebdevcdhs@cdhs.ini9gfr.mongodb.net/DAOS',
    ),
    PostsModule,
    ProfileModule,
    AuthModule,
    EnsembleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
