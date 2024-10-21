import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  darkMode = false;

  toggleTheme() {
    this.darkMode = !this.darkMode;
    const element = document.querySelector('body');
    if (element) {
      if (this.darkMode) {
        console.log('switchdark');
        element.classList.add('dark-mode');
      } else {
        console.log('switchLight');
        element.classList.remove('dark-mode');
      }
    }
  }
}
