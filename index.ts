import app from './src/app';

const PORT: number = 8081;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
