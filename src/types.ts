//Interface representando um tutor
  export interface Tutor {
    id: number;
    name: string;
    phone: string;
    email: string;
    date_of_birth: string;
    zip_code: string;
    pets: Pet[];
  }
 
//Interface representando um pet
  export interface Pet {
    id: number;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
    tutorId?: number;
  }
  
  export const tutors: Tutor[] = [];