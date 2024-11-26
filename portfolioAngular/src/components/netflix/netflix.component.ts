import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-netflix',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './netflix.component.html',
  styleUrl: './netflix.component.css',
})
export class NetflixComponent {
  videos = [
    {
      title: 'Amazing Nature',
      url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      imageUrl: 'thub.jpg',
      link: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    },
    {
      title: 'Time Lapse of City',
      url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      imageUrl: 'thub.jpg',
      link: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    },
    {
      title: 'Wildlife Footage',
      url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      imageUrl: 'thub.jpg',
      link: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    },
    {
      title: 'Time Lapse of City',
      url: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      imageUrl: 'thub.jpg',
      link: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    },
  ];
}
