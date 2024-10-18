import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  projects = [
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp',
      link: '#',
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/111.webp',
      link: '#',
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/112.webp',
      link: '#',
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/114.webp',
      link: '#',
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/115.webp',
      link: '#',
    },
    {
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/fluid/city/116.webp',
      link: '#',
    },
  ];
}
