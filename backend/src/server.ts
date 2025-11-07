import express from 'express';
import 'dotenv/config';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/tasks', taskRoutes);

app.get('/', (_req, res) => {
  res.send('Hello from TeamBoard backend!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
