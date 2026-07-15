import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html'
})
export class ServicesComponent {
  servicios = [
    {
      titulo: 'Terapias Personalizadas',
      descripcion: 'Atenciones de 50 min con material lúdico incluido. Evaluación integral y seguimiento semanal.',
      imagen: 'uno.jpg' 
    },
    {
      titulo: 'Club de Tareas',
      descripcion: 'Regularización escolar y apoyo en proyectos. Cursos de repaso en horarios flexibles.',
      imagen: 'dos.jpg'
    },
    {
      titulo: 'Academia del Sabor',
      descripcion: 'Recetas divertidas con ingredientes frescos. Técnicas básicas y taller de panadería para niños.',
      imagen: 'cuatro.jpg'
    }
  ];
}