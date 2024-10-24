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
      content: 'helloo have a nice a day guess what happened',
    },
    {
      title: 'Data Analyser',
      imageUrl: 'mag.png',
      link: 'https://github.com/ghadaabassi/Mooc_Data_Analyser.git',
      content: 'helloo have a nice a day guess what happened',
    },
    {
      title: 'Art and IA',
      imageUrl: 'art.png',
      link: 'https://github.com/ghadaabassi/Art_Gallery_Project.git',
      content: 'helloo have a nice a day guess what happened',
    },
    {
      title: 'Jenkins Pipline can make your life easy',
      imageUrl: 'jk.png',
      link: 'https://github.com/ghadaabassi/PipelineSpringBoot.git',
      content: 'helloo have a nice a day guess what happened',
    },
    {
      title: 'Jenkins Pipline can make your life easy',
      imageUrl: 'art.png',
      link: 'https://github.com/ghadaabassi/PipelineSpringBoot.git',
      content: 'helloo have a nice a day guess what happened',
    },
    {
      title: 'Jenkins Pipline can make your life easy',
      imageUrl: 'travel.png',
      link: 'https://github.com/ghadaabassi/PipelineSpringBoot.git',
      content: 'helloo have a nice a day guess what happened',
    },
  ];
}
