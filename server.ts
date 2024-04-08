import express from 'express';
import path from 'path';
// import { excludeFileMiddleware } from './middleware/excludeFileMiddleware';

const app = express();
const PORT = 3000;

// Use the custom middleware to exclude specific files
// app.use(excludeFileMiddleware);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname)));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
