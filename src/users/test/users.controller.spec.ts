import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { Test } from '@nestjs/testing';
import { userStub } from './stubs/user.stubs';
import { User } from '../schemas/user.schema';
import { updateUserDTOStub } from "./stubs/create-user-dto.stubs";

jest.mock('../users.service');

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  describe('getUser', () => {
    describe('when getUSer is called', () => {
      let user: User;

      beforeEach(async () => {
        user = await usersController.getUser(userStub().userId);
      });

      test('then it should call userService', () => {
        expect(usersService.getUserById).toBeCalledWith(userStub().userId);
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('getUsers', () => {
    describe('when getUsers called', () => {
      let users: User[];

      beforeEach(async () => {
        users = await usersController.getUsers();
      });

      test('then it should call userService', () => {
        expect(usersService.getUsers);
      });

      test('then it should return a list of users', () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe('createUser', () => {
    describe('when createUser called', () => {
      let user: User;

      beforeEach(async () => {
        user = await usersService.createUser(userStub());
      });

      test('then it should call userService', () => {
        expect(usersService.createUser).toBeCalledWith(userStub());
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });

  describe('updateUser', () => {
    describe('when updateUser called', () => {
      let user: User;

      beforeEach(async () => {
        user = await usersService.updateUser(
          userStub().userId,
          updateUserDTOStub(),
        );
      });

      test('then it should call userService', () => {
        expect(usersService.updateUser).toBeCalledWith(
          userStub().userId,
          updateUserDTOStub(),
        );
      });

      test('then it should return a user', () => {
        expect(user).toEqual(userStub());
      });
    });
  });
});
