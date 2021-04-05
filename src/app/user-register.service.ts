import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {

  constructor(private http : HttpClient) { }

  public doRegistration(user){
    return this.http.post("http://localhost:8080/save-user",user, {responseType : "text" as "json"});
  }

  public getUsers(){
    return this.http.get("http://localhost:8080/all-users");
  }

  public getUserByFirstname(firstname){
    return this.http.get("http://localhost:8080/search/"+firstname);
  }

  public deleteUser(email){
    return this.http.get("http://localhost:8080/delete/"+email);
  }
}
