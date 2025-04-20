import lottie from 'lottie-web';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.loadLottieAnimations();
  }


  loadLottieAnimations(): void {

    const animationPaths = [
      '/Animation1.json',
      '/Animation2.json',
      '/Animation3.json',
      '/Animation4.json',
      '/Animation5.json'
    ];


    animationPaths.forEach((path, index) => {
      const container = document.getElementById(`lottie-animation-${index + 1}`);
      if (container) {
        lottie.loadAnimation({
          container: container,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: path
        });
      }
    });
  }
}
