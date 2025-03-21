import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // Backend base url (adresse de destination
  url: string = "http://localhost:3000/api/matches"
  // httpClient : livreur (bostagi)
  constructor(private httpClient: HttpClient) { }

  // request to ad match
  // response : isAdded ='true/false'
  addMatch(matchObj: any) {
    return this.httpClient.post<{msg:string}>(this.url, matchObj)
  }

  // request to edit match
  // edit-match component 
  // response : msg='edited with success/ not edited'
  editMatch(matchObj: any) { 
    return this.httpClient.put<{isEdited:any}>(this.url,matchObj)
  }

  // request to get all matches 
  // matches-tab , matches 
  // response =[{},{},{}]
  displayAllMatches() {
    return this.httpClient.get<{tab:any,nbr:number}>(this.url)
  }

  // request to get match by id
  // match-info
  // response={}
  displayMatchById(id: number) {
    return this.httpClient.get<{foundMatch : any ,msg:string}>(this.url + "/" + id)
  }
  // request to delet match by id
  // response : msg='ok/nok'
  deleteMatch(id: number) {
    return this.httpClient.delete< {msg: string}>(this.url + "/" + id)
  }

  // request to search matches by score 
  searchMatches(obj:any) { 
    return this.httpClient.post<{tab:any}>(this.url,obj)
  }
}


