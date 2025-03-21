import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  // Backend base url (adresse de destination
  url: string = "http://localhost:3000/api/teams"
  // httpClient : livreur (bostagi)
  constructor(private httpClient: HttpClient) { }
  // request to ad team
  // response : isAdded ='true/false'
  addTeam(teamObj: any) {
    return this.httpClient.post<{ msg: string }>(this.url, teamObj)
  }

  // request to edit team
  // edit-team component 
  // response : msg='edited with success/ not edited'
  editTeam(obj: any) {
    return this.httpClient
   }

  // request to get all Teams 
  // Teams-tab , Teams 
  // response =[{},{},{}]
  displayAllTeams() {
    return this.httpClient.get<{tab:any,nbr:number}>(this.url)
  }

  // request to get team by id
  // team-info
  // response={}
  displayTeamById(id: number) {
    return this.httpClient.get<{foundTeam : any ,msg:string}>(this.url + "/" + id)
  }
  // request to delet team by id
  // response : msg='ok/nok'
  deleteTeam(id: number) {
    return this.httpClient.delete(this.url + "/" + id)
  }

  // request to search Teams by score 
  searchTeams() { }
}
