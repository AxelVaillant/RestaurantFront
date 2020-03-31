import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from './models/commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http : HttpClient) { }
  getAll(){
    return this.http.get<Commande[]>('http://localhost:8080/commande/all').pipe()
  }
  create(commande: Commande){
    return this.http.post<Commande>('http://localhost:8080/commande/save',commande).pipe()
  }

  getbyid(id:number){
    return this.http.get<Commande>('http://localhost:8080/commande/byid/'+id).pipe()
  }
}
