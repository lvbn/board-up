import supertest from 'supertest';
import { configApp } from '../app';
import connectDB from '../database';
import * as dotenv from 'dotenv';

const app = configApp();

beforeAll(() => {
  dotenv.config();
});

describe.skip('game', () => {
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

    describe('given an autheticated request', () => {
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 200', async () => {
        const response = await supertest(app)
          .get('/game/')
          .set('Cookie', cookie);

        expect(response.statusCode).toBe(200);
      });

      it('should return an array of games', async () => {
        const response = await supertest(app)
          .get('/game/')
          .set('Cookie', cookie);

        expect(Array.isArray(response.body)).toBe(true);
      });
    });
  });
});
