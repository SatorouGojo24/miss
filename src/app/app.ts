import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component';
import { FooterComponent } from './components/footer/footer.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, WhatsappBtnComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {
  title = 'landing-maestra';

  ngOnInit() {
    AOS.init({
      duration: 800, 
      once: true,  
      offset: 100    
    });
  }
}