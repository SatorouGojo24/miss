import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp-btn',
  standalone: true,
  templateUrl: './whatsapp-btn.component.html'
})
export class WhatsappBtnComponent {
  telefono = '525571310061'; 
  
  mensaje = '¡Hola Miss Naty! Vengo de su página web y me gustaría pedirle informes.';

  get urlWhatsapp(): string {
    return `https://wa.me/${this.telefono}?text=${encodeURIComponent(this.mensaje)}`;
  }
}