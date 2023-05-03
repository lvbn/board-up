import supertest from 'supertest';
import { randomUUID } from 'crypto';
import { configApp } from '../app';
import connectDB from '../database';
import * as dotenv from 'dotenv';

const app = configApp();

beforeAll(() => {
  dotenv.config();
});

describe('boardup', () => {
  const cookie = [
    'authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGJiZGJkNjI4ODk2ZmVmMTczYWJhYyIsInVzZXJuYW1lIjoiZmVkZXJpY28iLCJpYXQiOjE2ODMxMTQyMTl9.xYI3B5Dv_AEWz2Mxei-tMzxTLlLAyUzDwUzbJtXUsgA; Path=/; HttpOnly;',
  ];

  describe('fetch', () => {
    describe('given an unauthenticated request', () => {
      it('should return a 401 with "MissingAuthToken"', async () => {
        const response = await supertest(app).post('/board/');

        expect(response.statusCode).toBe(401);
        expect(response.text).toBe('MissingAuthToken');
      });
    });

    describe('given an authenticated request', () => {
      beforeAll(async () => {
        await connectDB();
      });

      it('should return an array of boardups', async () => {
        const response = await supertest(app)
          .post('/board/')
          .set('Cookie', cookie);

        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
      });
    });
  });

  describe('create', () => {
    describe('given an unauthenticated request', () => {
      it('should return a 401 with "MissingAuthToken"', async () => {
        const response = await supertest(app).post('/board/create');

        expect(response.statusCode).toBe(401);
        expect(response.text).toBe('MissingAuthToken');
      });
    });

    describe('given invalid data', () => {
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 500 with "DatabaseError"', async () => {
        const response = await supertest(app)
          .post('/board/create')
          .send({
            ivalidData: 'ivalidData',
          })
          .set('Cookie', cookie);

        expect(response.statusCode).toBe(500);
        expect(response.text).toBe('DatabaseError');
      });
    });

    describe('given correct data', () => {
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 200', async () => {
        const data = {
          game: '644ce658d718dcd5b2b87d9f',
          level: 'amateur',
          players: 10,
          location: 'Cupertino',
          datetime: new Date().getTime().toString(),
          details: 'Testing',
          attending: [],
        };

        const response = await supertest(app)
          .post('/board/create')
          .send(data)
          .set('Cookie', cookie);

        expect(response.statusCode).toBe(200);
      });
    });
  });
});
