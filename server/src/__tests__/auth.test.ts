import supertest from 'supertest';
import { randomUUID } from 'crypto';
import { configApp } from '../app';
import connectDB from '../database';
import * as dotenv from 'dotenv';

const app = configApp();

beforeAll(() => {
  dotenv.config();
});

// Testing the auth functionality
describe.skip('auth', () => {
  // Testing the signin
  describe('signin', () => {
    // Conditions for testing
    describe('given no username or password', () => {
      it('should return a 400 with "BadData"', async () => {
        const response = await supertest(app).post('/auth/signin');

        expect(response.statusCode).toBe(400);
        expect(response.text).toBe('BadData');
      });
    });

    describe('given a wrong username', () => {
      // Connect to database
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 400 with "NoUser"', async () => {
        const username = randomUUID().toString();
        const password = 'password';

        const response = await supertest(app)
          .post('/auth/signin')
          .send({ username, password });

        expect(response.statusCode).toBe(400);
        expect(response.text).toBe('NoUser');
      });
    });

    describe('given a wrong password', () => {
      // Connect to database
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 401 with "IncorrectPassword"', async () => {
        const username = 'federico';
        const password = 'password';

        const response = await supertest(app)
          .post('/auth/signin')
          .send({ username, password });

        expect(response.statusCode).toBe(401);
        expect(response.text).toBe('IncorrectPassword');
      });
    });

    describe('given the correct credentials', () => {
      // Connect to database
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 200 with User', async () => {
        const username = 'federico';
        const password = 'random';

        const user = {
          _id: '644bbdbd628896fef173abac',
          attendingBoardups: [],
          hostingBoardups: [
            '644be7e0059500924e865eb0',
            '6450eb9dbf0d0e4c2bac9b8d',
            '6450ebdcbf0d0e4c2bac9bdc',
            '645102841afeeaf01f277ca3',
          ],
          username: 'federico',
        };

        const response = await supertest(app)
          .post('/auth/signin')
          .send({ username, password });

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(user);
      });
    });
  });

  describe('signup', () => {
    describe('given no username or password', () => {
      it('should return a 400 with "BadData"', async () => {
        const response = await supertest(app).post('/auth/signup');

        expect(response.statusCode).toBe(400);
        expect(response.text).toBe('BadData');
      });
    });

    describe('given an already used username', () => {
      // Connect to database
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 500 with "ServerError"', async () => {
        const username = 'federico';
        const password = 'password';

        const response = await supertest(app)
          .post('/auth/signup')
          .send({ username, password });

        expect(response.statusCode).toBe(500);
        expect(response.text).toBe('ServerError');
      });
    });

    describe('given correct signup credentials', () => {
      // Connect to database
      beforeAll(async () => {
        await connectDB();
      });

      it('should return a 200 with User', async () => {
        const username = randomUUID().toString();
        const password = 'random';

        const user = {
          _id: '',
          attendingBoardups: [],
          hostingBoardups: [],
          username: username,
        };

        const response = await supertest(app)
          .post('/auth/signup')
          .send({ username, password });

        expect(response.statusCode).toBe(200);

        const body = response.body as {
          _id: string;
          attendingBoardups: string[];
          hostingBoardups: string[];
          username: string;
        };
        user._id = body._id;
        expect(body).toEqual(user);
      });
    });
  });
});
