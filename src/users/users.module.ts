import { Module } from '@nestjs/common';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';

@Module({
  controllers: [CustomersController, UsersController],
  providers: [CustomersService, UsersService],
})

export class UsersModule {};
