import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MeteoService } from '../../services/meteo/meteo.service';

@Component({
  selector: 'app-image-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './image-generator.component.html',
  styleUrl: './image-generator.component.css',
})
export class ImageGeneratorComponent {
  imageUrl: string | null = null;

  constructor(private meteoService: MeteoService) {}

  generateImage(prompt: string): void {
    this.imageUrl = this.meteoService.generateImage(prompt);
  }
}
