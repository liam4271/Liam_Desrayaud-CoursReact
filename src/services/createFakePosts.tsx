import { faker } from '@faker-js/faker';
import { Post } from '../models/Posts';

export const createFakePost = (count: number):Post[] => 
    Array.from(Array(count).keys()).map((id) => ({
        id: new Date().getTime() + id,
        description: faker.lorem.paragraphs(),
        image: faker.image.image(),
        title: faker.lorem.sentence(),
    }));
