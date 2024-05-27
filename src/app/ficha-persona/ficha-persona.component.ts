import { Component, Input } from '@angular/core';
import { IFichaPersona } from '../interfaces/ificha-persona';

@Component({
  selector: 'app-ficha-persona',
  standalone: true,
  imports: [],
  templateUrl: './ficha-persona.component.html',
  styleUrl: './ficha-persona.component.css'
})
export class FichaPersonaComponent {
  @Input() fichaPersona!: IFichaPersona;
}
