import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
weatherUrl:string='http://localhost:300/api/weather'
  constructor(private httpClient:HttpClient) { }
  searchWeather(obj:any){
    return this.httpClient.post<{result:any,msg:string}>(this.weatherUrl,obj)
  }
}
