import supertest from 'supertest';
import { configApp } from '../app';
import connectDB from '../database';
import * as dotenv from 'dotenv';

const app = configApp();

beforeAll(() => {
  dotenv.config();
});

describe('database', () => {
  const cookie = [
    'authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGJiZGJkNjI4ODk2ZmVmMTczYWJhYyIsInVzZXJuYW1lIjoiZmVkZXJpY28iLCJpYXQiOjE2ODMxMTQyMTl9.xYI3B5Dv_AEWz2Mxei-tMzxTLlLAyUzDwUzbJtXUsgA; Path=/; HttpOnly;',
  ];

  describe('out of service', () => {
    it('should return a 500 with "DatabaseError', async () => {
      const response = await supertest(app).get('/user/').set('Cookie', cookie);

      console.log(response.statusCode);

      expect(response.statusCode).toBe(500);
      expect(response.text).toBe('DatabaseError');
    }, 60000);
  });

  describe('connection', () => {
    beforeAll(async () => {
      await connectDB();
    });

    it('should retrieve documents once connected', async () => {
      const response = await supertest(app).get('/user/').set('Cookie', cookie);

      expect(response.statusCode).toBe(200);
    });
  });
});
