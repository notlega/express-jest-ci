import supertest, { type Response } from 'supertest';
import { describe, expect, it } from '@jest/globals';
import app from '../app';

describe('division', () => {
  it('should divide 20 and 10', async () => {
    const response: Response = await supertest(app).get('/divide/20/10');
    expect(response.body.result).toBe(2);
  });
});
