import supertest from 'supertest';
import { configApp } from '../app';
import connectDB from '../database';
import * as dotenv from 'dotenv';

const app = configApp();

beforeAll(() => {
  dotenv.config();
});

describe('user', () => {
  const cookie = [
    'authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGJiZGJkNjI4ODk2ZmVmMTczYWJhYyIsInVzZXJuYW1lIjoiZmVkZXJpY28iLCJpYXQiOjE2ODMxMTQyMTl9.xYI3B5Dv_AEWz2Mxei-tMzxTLlLAyUzDwUzbJtXUsgA; Path=/; HttpOnly;',
  ];

  describe('fetch', () => {
    describe('given an unauthenticated request', () => {
      it('should return a 401 with "MissingAuthToken"', async () => {
        const response = await supertest(app).get('/game/');

        expect(response.statusCode).toBe(401);
        expect(response.text).toBe('MissingAuthToken');
      });
    });

    describe('given an authenticated request', () => {
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 200', async () => {
        const response = await supertest(app)
          .get('/user/')
          .set('Cookie', cookie);

        expect(response.statusCode).toBe(200);
      });

      it('should return a User', async () => {
        const user = {
          _id: '644bbdbd628896fef173abac',
          username: 'federico',
          hostingBoardups: [
            '644be7e0059500924e865eb0',
            '6450eb9dbf0d0e4c2bac9b8d',
            '6450ebdcbf0d0e4c2bac9bdc',
            '645102841afeeaf01f277ca3',
            '64524c74e03e7f119ba92f7f',
            '64524c82c9a2713c2d737d1b',
          ],
          attendingBoardups: [],
        };
        const response = await supertest(app)
          .get('/user/')
          .set('Cookie', cookie);

        expect(response.body).toEqual(user);
      });
    });
  });
});
