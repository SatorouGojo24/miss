import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services'; 
import { FaqComponent } from '../faq/faq'; 

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ServicesComponent, FaqComponent],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {}