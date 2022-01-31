import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser() {
    return 'Hello';
  }

  @Post('/')
  createUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
    @Body('country') country: string,
  ) {
    console.log('------------------ ');
    return this.userService.createUser(name, email, password, country);
  }
}
