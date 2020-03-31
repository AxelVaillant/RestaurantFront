import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plat } from './models/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<Plat[]>('http://localhost:8080/plat/all').pipe()
  }
  create(plat: Plat){
    return this.http.post<Plat>('http://localhost:8080/plat/save',plat).pipe()
  }
  update(id:number,plat:Plat){
    return this.http.put<Plat>('http://localhost:8080/plat/update/'+id,plat).pipe()
  }
  getbyid(id:number){
    return this.http.get<Plat>('http://localhost:8080/plat/byid/'+id).pipe()
  }
  delete(id:number){
    return this.http.post<Plat>('http://localhost:8080/plat/delete/'+id,{}).pipe()
  }

}
