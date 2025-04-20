import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  title = 'REPIS';
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
}
