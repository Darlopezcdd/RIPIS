import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { UnialiadasComponent } from './unialiadas/unialiadas.component';
import {ContactoComponent} from './contacto/contacto.component';
import {NavbarComponent} from './navbar/navbar.component';
import {InicioComponent} from './inicio/inicio.component';
import {FooterComponent} from './footer/footer.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, NavbarComponent, InicioComponent, FooterComponent,BeneficiosComponent,UnialiadasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RipisTodo';
}
