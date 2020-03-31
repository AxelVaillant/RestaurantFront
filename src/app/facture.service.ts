import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from './models/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http : HttpClient) { }
  
  getAll(){
    return this.http.get<Facture[]>('http://localhost:8080/facture/all').pipe()
  }
  create(facture: Facture){
    return this.http.post<Facture>('http://localhost:8080/facture/save',facture).pipe()
  }

  getbyid(id:number){
    return this.http.get<Facture>('http://localhost:8080/facture/byid/'+id).pipe()
  }

}
