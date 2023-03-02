import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/add/:num1/:num2', (req: Request, res: Response) => {
  const num1: number = parseInt(req.params.num1, 10);
  const num2: number = parseInt(req.params.num2, 10);
  const num3: number = num1 + num2;

  res.json({ result: num3 });
});

app.get('/subtract/:num1/:num2', (req: Request, res: Response) => {
  const num1: number = parseInt(req.params.num1, 10);
  const num2: number = parseInt(req.params.num2, 10);
  const num3: number = num1 - num2;

  res.json({ result: num3 });
});

app.get('/multiply/:num1/:num2', (req: Request, res: Response) => {
  const num1: number = parseInt(req.params.num1, 10);
  const num2: number = parseInt(req.params.num2, 10);
  const num3: number = num1 * num2;

  res.json({ result: num3 });
});

app.get('/divide/:num1/:num2', (req: Request, res: Response) => {
  const num1: number = parseInt(req.params.num1, 10);
  const num2: number = parseInt(req.params.num2, 10);
  const num3: number = num1 / num2;

  res.json({ result: num3 });
});

export default app;
