import { UpdateUserDTO } from '../../dto/update-user.dto';

export const updateUserDTOStub = (): UpdateUserDTO => {
  return {
    firstName: 'Oybek',
    lastName: 'Makhsudov',
    age: 21,
    email: 'programmingiswonderful@gmail.com',
    favouriteFoods: ['Palov', 'Manti'],
  };
};
