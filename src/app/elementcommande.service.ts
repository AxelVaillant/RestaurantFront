import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ElementCommande } from './models/elementcommande';
import { Commande } from './models/commande';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ElementcommandeService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<ElementCommande[]>('http://localhost:8080/elementcommande/all').pipe()
  }
 allby(elementcommande: ElementCommande){
    return this.http.post<ElementCommande[]>('http://localhost:8080/elementcommande/allby',elementcommande).pipe()
  }
 filtre(id:number){
    return this.http.get<ElementCommande[]>('http://localhost:8080/elementcommande/filtre/'+id).pipe()
  }
  create(elementcommande: ElementCommande){
    return this.http.post<ElementCommande>('http://localhost:8080/elementcommande/save',elementcommande).pipe()
  }
  update(id:number,elementcommande:ElementCommande){
    return this.http.put<ElementCommande>('http://localhost:8080/elementcommande/update/'+id,elementcommande).pipe()
  }
  getbyid(id:number){
    return this.http.get<ElementCommande>('http://localhost:8080/elementcommande/byid/'+id).pipe()
  }
  delete(id:number){
    return this.http.post<ElementCommande>('http://localhost:8080/elementcommande/delete/'+id,{}).pipe()
  }

}
