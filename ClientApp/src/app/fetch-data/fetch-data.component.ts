import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  forecasts: WeatherForecast[] = [];
  url: string = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    //http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
    //  this.forecasts = result;
    //}, error => console.error(error));
    this.url = baseUrl;
  }

  async ngOnInit() {
    try {
      const wfs = await this.getData(this.http, this.url);
      console.log("from outer function");
      console.log(wfs);
      console.log(1);
      this.forecasts = wfs;
    }
    catch (error) {
      console.error(error);
    }
  }

  async getData(http: HttpClient, baseUrl: string): Promise<WeatherForecast[]> {
    try {
      const response = await firstValueFrom(http.get<WeatherForecast[]>(baseUrl + 'weatherforecast'));
      console.log("from inner function");
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
