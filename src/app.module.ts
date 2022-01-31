import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from '../ormconfig';
import { UserController } from './users/user.controller';
import { UserService } from './users/user.service';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
export class UserModule {}
