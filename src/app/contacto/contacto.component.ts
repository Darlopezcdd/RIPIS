import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contacto',
  imports: [RouterOutlet],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  mapaUrl: SafeResourceUrl;
  enlaceMaps: string = 'https://www.google.com/maps/place/Universidad+Tecnica+del+Norte+%22UTN%22/@0.3581941,-78.1140831,17z/data=!3m1!4b1!4m6!3m5!1s0x8e2a3cad309ad309:0xc97eab5c0f6a095e!8m2!3d0.3581887!4d-78.1115082!16s%2Fg%2F11hz8x16sg?entry=ttu';

  constructor(private sanitizer: DomSanitizer) {
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.032146306645!2d-78.1140831!3d0.3581941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2a3cad309ad309%3A0xc97eab5c0f6a095e!2sUniversidad%20Tecnica%20del%20Norte%20%22UTN%22!5e0!3m2!1ses-419!2sec!4v1713289440704!5m2!1ses-419!2sec';
    this.mapaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
