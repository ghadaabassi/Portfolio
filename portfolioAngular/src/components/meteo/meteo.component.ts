import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoService } from '../../services/meteo/meteo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
})
export class MeteoComponent implements OnInit {
  locations: string[] = [
    'Toronto',
    'Tunis',
    'Iraq',
    'Libya',
    'Paris',
    'Germany',
    'New York',
    'London',
    'Tokyo',
    'Sydney',
  ];
  selectedLocation: string = '';
  realtimeWeatherData: any;
  forecastWeatherData: any;
  constructor(private meteoService: MeteoService) {}
  ngOnInit(): void {}
  fetchWeather(): void {
    if (this.selectedLocation) {
      this.meteoService
        .getRealtimeWeather(this.selectedLocation)
        .subscribe((data) => {
          this.realtimeWeatherData = data;
        });
      this.meteoService
        .getForecastWeather(this.selectedLocation)
        .subscribe((data) => {
          this.forecastWeatherData = data;
          console.log(this.forecastWeatherData);
        });
    }
  }
}
