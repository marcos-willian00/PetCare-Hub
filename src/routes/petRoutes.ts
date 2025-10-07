import express, { Request, Response } from 'express';
import { Pet } from '../types';
import { pets } from '../data/pets';

const router = express.Router();

// Cria um animal de estimação e o adiciona a um tutor - ROTA POST
let nextId = 1;

router.post('/:tutorId', (req: Request, res: Response) => {
  const tutorId: number = Number(req.params.tutorId);
  const pet: Pet = req.body;
  pet.tutorId = tutorId;
  pets.push(pet);
  nextId++;
  res.status(201).json({ message: 'Pet created successfully', pet });
});

// Exclui um animal de estimação de um tutor - ROTA DELETE
router.delete('/:petId/tutor/:tutorId', (req: Request, res: Response) => {
  const petId: number = Number(req.params.petId);
  const tutorId: number = Number(req.params.tutorId);
  const index = pets.findIndex(pet => pet.id === petId && pet.tutorId === tutorId);
  if (index !== -1) {
    pets.splice(index, 1);
    res.status(200).json({ message: 'Pet deleted successfully' });
  } else {
    res.status(404).json({ message: 'Pet not found' });
  }
});

export default router;