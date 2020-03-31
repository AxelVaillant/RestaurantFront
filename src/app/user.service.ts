import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<User[]>('http://localhost:8080/user/all').pipe()
  }
  create(user: User){
    return this.http.post<User>('http://localhost:8080/user/save',user).pipe()
  }
  update(id:number,user:User){
    return this.http.put<User>('http://localhost:8080/user/update/'+id,user).pipe()
  }
  getbyid(id:number){
    return this.http.get<User>('http://localhost:8080/user/byid/'+id).pipe()
  }
  delete(id:number){
    return this.http.post<User>('http://localhost:8080/user/delete/'+id,{}).pipe()
  }
  login(user : User){
    return this.http.post<User>('http://localhost:8080/user/login',user).pipe()
  }
}
