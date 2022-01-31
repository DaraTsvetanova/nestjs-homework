import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  createUser(name: string, email: string, password: string, country: string) {
    const newUser = new User(name, email, password, country);
  }
}
