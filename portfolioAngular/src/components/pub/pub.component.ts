import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pub',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pub.component.html',
  styleUrl: './pub.component.css',
})
export class PubComponent {
  pubs = [
    {
      title: 'IA can help ypu travel',
      imageUrl: 'travel.png',
      link: 'https://github.com/ghadaabassi/AVA.git',
    },
    {
      title: 'Data Analyser',
      imageUrl: 'mag.png',
      link: 'https://github.com/ghadaabassi/Mooc_Data_Analyser.git',
    },
    {
      title: 'Art and IA',
      imageUrl: 'art.png',
      link: 'https://github.com/ghadaabassi/Art_Gallery_Project.git',
    },
    {
      title: 'Jenkins Pipline can make your life easy',
      imageUrl: 'jk.png',
      link: 'https://github.com/ghadaabassi/PipelineSpringBoot.git',
    },
    {
      title: 'Subway Clone new version',
      imageUrl: 'sub.png',
      link: 'https://github.com/ghadaabassi/Subway_Clone.git',
    },
    {
      title: '3D Modeling you should learn it',
      imageUrl: 'chair.png',
      link: 'https://github.com/ghadaabassi/Chair_3D.git',
    },
  ];
}
