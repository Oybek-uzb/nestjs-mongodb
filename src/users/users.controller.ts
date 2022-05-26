import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User> {
    return this.usersService.getUserById(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    return this.usersService.createUser(createUserDTO);
  }

  @Put(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDTO: UpdateUserDTO,
  ): Promise<User> {
    return this.usersService.updateUser(userId, updateUserDTO);
  }
}
