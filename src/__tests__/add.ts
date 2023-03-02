import supertest, { type Response } from 'supertest';
import { describe, expect, it } from '@jest/globals';
import app from '../app';

describe('addition', () => {
  it('should add 10 and 20', async () => {
    const response: Response = await supertest(app).get('/add/10/20');
    expect(response.body.result).toBe(30);
  });
});
