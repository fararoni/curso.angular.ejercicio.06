import { Component } from '@angular/core';
import { FichaPersonaComponent } from '../ficha-persona/ficha-persona.component';
import { IFichaPersona } from '../interfaces/ificha-persona';

@Component({
  selector: 'app-fichas',
  standalone: true,
  imports: [FichaPersonaComponent],
  templateUrl: './fichas.component.html',
  styleUrl: './fichas.component.css'
})
export class FichasComponent {
  readonly baseUrl = 'https://sitl.diputados.gob.mx/LXV_leg/fotos_lxvconfondo';
  fichaPersona: IFichaPersona = {
    id: 1,
    nombre: 'Maria Morales Dominguez',
    ciudad: 'Veracruz',
	
    distrito: 80,
    url_photo: `${this.baseUrl}/103_foto_chica.jpg`,
    reelecta: true,
    enlicencia: false,
	suplente : 'Francisco Bocanegra Collado'
  };
}
