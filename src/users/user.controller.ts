import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(userservice: UserService) {}

  @Get()
  getUser() {
    return 'Hello';
  }
}
