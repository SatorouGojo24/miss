import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html'
})
export class Services {
  servicios = [
    {
      titulo: 'Terapias Personalizadas',
      descripcion: 'Atención especializada en lenguaje y psicología. Fomentamos la articulación, comprensión y el manejo de emociones.',
      imagen: 'uno.jpg' 
    },
    {
      titulo: 'Club de Tareas',
      descripcion: 'Regularización y apoyo en proyectos escolares. Un espacio donde aprendemos, crecemos y brillamos juntos todos los días.',
    
      imagen: 'dos.jpg'
    },
    {
      titulo: 'Academia del Sabor',
      descripcion: 'Enseño con corazón, horneo con el alma. Elaboración de divertidos postres, bolis, mini hotcakes y mucho más.',
  
      imagen: 'seis.webp'
    }
  ];
}