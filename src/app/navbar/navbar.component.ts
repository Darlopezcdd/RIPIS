
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';
import { Component, HostListener } from '@angular/core';


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
    this.menuVisible = !this.menuVisible;
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


  @HostListener('document:click', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onClick(event: MouseEvent | TouchEvent) {
    const clickedElement = event.target as HTMLElement;
    const isMenuOrSubmenu = clickedElement.closest('.menu') || clickedElement.closest('.submenu-box');

    if (!isMenuOrSubmenu) {
      this.submenuActivo = null;
    }
  }
}
