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
      title: 'AVA',
      imageUrl: 'travel.png',
      link: 'https://github.com/ghadaabassi/AVA.git',
    },
    {
      title: 'Data Analyser',
      imageUrl: 'mag.png',
      link: 'https://github.com/ghadaabassi/Mooc_Data_Analyser.git',
    },
    {
      title: 'Art Gallery',
      imageUrl: 'art.png',
      link: 'https://github.com/ghadaabassi/Art_Gallery_Project.git',
    },
    {
      title: 'Jenkins Pipline',
      imageUrl: 'jk.png',
      link: 'https://github.com/ghadaabassi/PipelineSpringBoot.git',
    },
    {
      title: 'Subway Clone',
      imageUrl: 'sub.png',
      link: 'https://github.com/ghadaabassi/Subway_Clone.git',
    },
    {
      title: '3D Chair',
      imageUrl: 'chair.png',
      link: 'https://github.com/ghadaabassi/Chair_3D.git',
    },
  ];
}
