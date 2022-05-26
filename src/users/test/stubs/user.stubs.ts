import { User } from '../../schemas/user.schema';

export const userStub = (): User => {
  return {
    firstName: 'Oybek',
    lastName: 'Makhsudov',
    userId: '123',
    age: 21,
    email: 'programmingiswonderful@gmail.com',
    favouriteFoods: ['Palov', 'Manti'],
  };
};
