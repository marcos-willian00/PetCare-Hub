//Importando módulos e dependências necessários
import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import tutorRoutes from './routes/tutorRoutes';
import petRoutes from './routes/petRoutes';

export const app = express();

//Configuração de middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/tutors', tutorRoutes);
app.use('/pets', petRoutes);