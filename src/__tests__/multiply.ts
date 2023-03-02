import supertest, { type Response } from 'supertest';
import { describe, expect, it } from '@jest/globals';
import app from '../app';

describe('multiplication', () => {
  it('should multiply 10 and 20', async () => {
    const response: Response = await supertest(app).get('/multiply/10/20');
    expect(response.body.result).toBe(200);
  });
});
