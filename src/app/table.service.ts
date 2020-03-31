import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Table } from './models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Table[]>('http://localhost:8080/table/all').pipe()
  }
  create(table: Table){
    return this.http.post<Table>('http://localhost:8080/table/save',table).pipe()
  }
  update(id:number,table:Table){
    return this.http.put<Table>('http://localhost:8080/table/update/'+id,table).pipe()
  }
  getbyid(id:number){
    return this.http.get<Table>('http://localhost:8080/table/byid/'+id).pipe()
  }
  delete(id:number){
    return this.http.post<Table>('http://localhost:8080/table/delete/'+id,{}).pipe()
  }
  login(table : Table){
    return this.http.post<Table>('http://localhost:8080/table/login',table).pipe()
  }
}
