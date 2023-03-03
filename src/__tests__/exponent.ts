import supertest, { type Response } from 'supertest';
import { describe, expect, it } from '@jest/globals';
import app from '../app';

describe('exponents', () => {
  it('should exponent 10 and 2', async () => {
    const response: Response = await supertest(app).get('/exponent/10/2');
    expect(response.body.result).toBe(100);
  });
});
