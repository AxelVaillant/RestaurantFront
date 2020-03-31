import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './models/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Role[]>('http://localhost:8080/role/all').pipe()
  }
  create(role: Role){
    return this.http.post<Role>('http://localhost:8080/role/save',role).pipe()
  }
}
