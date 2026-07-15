import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html'
})
export class FaqComponent {
  faqs = [
    {
      pregunta: '¿A partir de qué edad reciben a los pequeños?',
      respuesta: 'Atendemos a niños desde los 3 años en adelante, adaptando nuestras actividades, material lúdico y terapias a la etapa de desarrollo de cada uno.',
      abierto: false
    },
    {
      pregunta: '¿Cuáles son los horarios del Club de Tareas?',
      respuesta: 'Tenemos horarios flexibles por las tardes, de lunes a viernes, diseñados para no interferir con su horario escolar matutino. Contáctanos para revisar disponibilidad.',
      abierto: false
    },
    {
      pregunta: '¿Necesito llevar material para la Academia del Sabor?',
      respuesta: '¡No! Nosotros proporcionamos todos los ingredientes frescos, utensilios y materiales de seguridad. Solo necesitan traer muchas ganas de aprender y divertirse horneando.',
      abierto: false
    },
    {
      pregunta: '¿Cómo puedo agendar una primera evaluación?',
      respuesta: 'Es muy sencillo. Da clic en cualquier botón verde de WhatsApp en esta página y nos pondremos de acuerdo en el horario que mejor te acomode.',
      abierto: false
    }
  ];

  // Función que abre y cierra las preguntas
  toggleFaq(index: number) {
    this.faqs[index].abierto = !this.faqs[index].abierto;
  }
}