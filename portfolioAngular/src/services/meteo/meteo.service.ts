import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MeteoService {
  private realtimeApiUrl = 'https://api.tomorrow.io/v4/weather/realtime';
  private forecastApiUrl = 'https://api.tomorrow.io/v4/weather/forecast';
  private apiKey = environment.apiKey;
  constructor(private http: HttpClient) {}
  getRealtimeWeather(location: string): Observable<any> {
    const url = `${this.realtimeApiUrl}?location=${location}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  getForecastWeather(location: string): Observable<any> {
    const url = `${this.forecastApiUrl}?location=${location}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }

  private apiUrl = 'https://image.pollinations.ai/prompt/';
  private apiKey1 = environment.api1;

  generateImage(prompt: string): string {
    return this.apiUrl + encodeURIComponent(prompt);
  }
}
