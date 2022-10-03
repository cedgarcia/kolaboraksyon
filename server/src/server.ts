import server from './app';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });
// Initialize the server
const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
