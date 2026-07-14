import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, WhatsappBtnComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App {
  title = 'landing-maestra';
}