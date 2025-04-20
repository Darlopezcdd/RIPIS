import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  submenuActivo: string | null = null;
  menuVisible: boolean = false;

  mostrarSubmenu(nombre: string) {
    this.submenuActivo = nombre;
  }

  ocultarSubmenu(nombre: string) {
    if (this.submenuActivo === nombre) {
      this.submenuActivo = null;
    }
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible; // Cambia el estado de visibilidad del menú
  }
  constructor(private router: Router) {}
  redirigirConRecargaAngular(ruta: string) {
    this.menuVisible = false;
    this.submenuActivo = null;
    this.router.navigate([ruta]).then(() => {
    });
  }
  images: string[] = [
    'LogoRipis.png'
  ];
}
