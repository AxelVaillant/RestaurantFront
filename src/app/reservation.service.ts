import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get<Reservation[]>('http://localhost:8080/reservation/all').pipe()
  }
  create(reservation: Reservation){
    return this.http.post<Reservation>('http://localhost:8080/reservation/save',reservation).pipe()
  }

  getbyid(id:number){
    return this.http.get<Reservation>('http://localhost:8080/reservation/byid/'+id).pipe()
  }
  delete(id:number){
    return this.http.post<Reservation>('http://localhost:8080/reservation/delete/'+id,{}).pipe()
  }
}
