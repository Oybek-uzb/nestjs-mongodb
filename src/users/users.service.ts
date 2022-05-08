import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from "uuid";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepo: UsersRepository) {}

    async getUserById(userId: string): Promise<User> {
        return this.usersRepo.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepo.find({})
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User> {
        return this.usersRepo.create({
            userId: uuidv4(),
            ...createUserDTO
        })
    }

    async updateUser(userId: string, userUpdates: UpdateUserDTO): Promise<User> {
        return this.usersRepo.findOneAndUpdate({ userId }, userUpdates)
    }
}