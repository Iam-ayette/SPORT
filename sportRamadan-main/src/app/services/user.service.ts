import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Backend base userUrl (adresse de destination
  userUrl: string = "http://localhost:3000/api/users"
  // httpClient : livreur (bostagi)

  constructor(private httpClient: HttpClient) { }

  // request to add user
  // response : isAdded ='true/false'
  signup(userObj: any ,img:File) {
    let fDate=new FormData()
    fDate.append("img",img);
    fDate.append("firstName",userObj.firstName);
    fDate.append("lastName",userObj.lastName);
    fDate.append("email",userObj.email);
    fDate.append("pwd",userObj.pwd);
    fDate.append("phone",userObj.phone);
    fDate.append("role",userObj.role);
   return this.httpClient.post<{msg:string}>(this.userUrl+'/addUser',fDate)
  }
  // request to connect

  // response : msg='connected with success/ not connected'
  login(obj: any) {
    return this.httpClient.post<{msg:string, user:any}>(this.userUrl+'/signin',obj)
  }
  displayAllUsers() {
    return this.httpClient.get<{tab:any,nbr:number}>(this.userUrl)
  }
  displayUserById(id: number) {
    return this.httpClient.get<{foundMatch : any ,msg:string}>(this.userUrl + "/" + id)
  }
  // request to delet match by id
  // response : msg='ok/nok'
  deleteUser(id: number) {
    return this.httpClient.delete< {msg: string}>(this.userUrl + "/" + id)
  }
  editUser(matchObj: any) { 
    return this.httpClient.put<{isEdited:any}>(this.userUrl,matchObj)
  }
  getUser() {
    return this.httpClient.get<any>(this.userUrl);
}
}
