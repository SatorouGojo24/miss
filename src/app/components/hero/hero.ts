import { Component } from '@angular/core';
import { Services } from '../services/services';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Services],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
