import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadiumsService {
url: string = "http://localhost:3000/stadiums"
  constructor(private httpClient: HttpClient) { }

  searchStadiums(obj:any) { 
    return this.httpClient.post<{tab:any}>(this.url,obj)
  }

}
