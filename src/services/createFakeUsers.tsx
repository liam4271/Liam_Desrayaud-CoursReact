import { faker } from '@faker-js/faker';
import { User } from '../models/Users';

export const createFakerUsers = (count: number):User[] => 
    Array.from(Array(count).keys()).map((id) => ({
        id: new Date().getTime() + id,
        avatar: faker.image.avatar(),
        name: faker.person.fullName(),
    }));
