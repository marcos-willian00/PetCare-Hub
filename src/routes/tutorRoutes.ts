import express, { Request, Response } from 'express';
import { Tutor } from '../types';
import { tutors } from '../data/tutors';

const router = express.Router();

// Middleware de tratamento de erros
router.use((err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error.' });
});

// Recupera todos os tutores - ROTA GET 
router.get('/', (req: Request, res: Response) => {
  res.json(tutors);
});

// Cria um novo tutor - ROTA POST
let nextId = 1;

router.post('/', (req: Request, res: Response) => {
  const tutor: Tutor = req.body;
  tutors.push(tutor);
  nextId++;
  res.status(201).json({ message: 'New tutor created successfully', tutor });
});

// Exclui um tutor - ROTA DELETE
router.delete('/:id', (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const index = tutors.findIndex(tutor => tutor.id === id);
  if (index !== -1) {
    tutors.splice(index, 1);
    res.status(204).json({ message: 'Tutor deleted successfully' });
  } else {
    res.status(404).json({ message: 'Tutor not found' });
  }
});

export default router;