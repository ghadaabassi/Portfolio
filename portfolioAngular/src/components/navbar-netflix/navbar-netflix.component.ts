import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-netflix',
  standalone: true,
  imports: [],
  templateUrl: './navbar-netflix.component.html',
  styleUrl: './navbar-netflix.component.css'
})
export class NavbarNetflixComponent {
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
