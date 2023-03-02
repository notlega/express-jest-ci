import supertest, { type Response } from 'supertest';
import { describe, expect, it } from '@jest/globals';
import app from '../app';

describe('subtraction', () => {
  it('should subtract 20 and 10', async () => {
    const response: Response = await supertest(app).get('/subtract/20/10');
    expect(response.body.result).toBe(10);
  });
});
