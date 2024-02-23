import express from 'express';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { join } from 'path';
import indexRoutes from './routes/index.js';
import {PORT} from './config.js'
 
 
const app = express();
const port = 3000;

app.use(express.json());
 
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(indexRoutes);
app.listen(process.env.PORT || port, () => {
  console.log("El servidor escucha por el puerto", port);
app.use(express.static(join(__dirname, 'public')));

});