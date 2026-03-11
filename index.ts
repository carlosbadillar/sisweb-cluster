import express, { Express } from 'express';
import morgan from 'morgan';
import connectionDB from './src/connection/connection';
import router from './src/routes/index'; 

const app: Express = express();
const port: number = 3000;


app.use(morgan('dev'));
app.use(express.json());

connectionDB();


app.use('/api', router);

app.listen(port, () => {
  console.log(`🚀 Servidor del Clúster Automotriz corriendo en: http://localhost:${port}`);
});