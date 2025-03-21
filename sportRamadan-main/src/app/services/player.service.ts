import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // Backend base url (adresse de destination)
  url: string = "http://localhost:3000/api/players"
  // httpClient : livreur (bostagi)
  constructor(private httpClient: HttpClient) { }

  // request to ad Team
  // response : isAdded ='true/false'
  addPlayer(TeamObj: any) {
    return this.httpClient.post<{ msg: string }>(this.url, TeamObj)
  }

  // request to edit Team
  // edit-Team component 
  // response : msg='edited with success/ not edited'
  editPlayer(TeamObj: any) {
    return this.httpClient.put(this.url, TeamObj)
  }

  // request to get all teams 
  // teams-tab , teams 
  // response =[{},{},{}]
  displayALLPlayers() {
    return this.httpClient.get<{ tab: any, nbr: number }>(this.url)
  }

  // request to get Team by id
  // Team-info
  // response={}
  displayPlayerById(id: number) {
    return this.httpClient.get<{ foundPlayer: any, msg: string }>(this.url + "/" + id)
  }
  // request to delet Team by id
  // response : msg='ok/nok'
  deletePlayer(id: number) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  // request to search teams by score 
  searchPlayer() { }
}


