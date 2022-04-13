import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO  } from '../dtos/users.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [{
    id: 1,
    email: 'johnlennon@gmail.com',
    password: 'Woefw345ej432d',
    role: 'admin',
  }];
  
  // findRole(role: string) {
  //   const usersPerRole = [];
  //   for (let i; this.users.length > i; i++) {
  //     let userIndex = this.users.find((usr) => usr.role === role);
  //     if (userIndex) {
  //       usersPerRole.push(userIndex);
  //     }
  //   }
  //   return console.log(userIndex);
  // };

  findAll() {
    return this.users;
  };
  
  findOne(id: number) {
    const user = this.users.find((prod) => prod.id === id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  
  create(payload: CreateUserDTO) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  } 
  
  update(id: number, payload: UpdateUserDTO) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((prod) => prod.id === id);
      this.users[index] = {
        ...user,
        ...payload,
      };
      return this.users[index];
    }
    return null;
  }
  
  delete(id: number) {
    this.users.splice(id,1);
    return `Borrado ${(id + 1)}`;
  }
}
