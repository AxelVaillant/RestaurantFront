import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';
import { TableService } from '../table.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.css']
})
export class ListTableComponent implements OnInit {
listTable : Table[]=[]
  constructor(private tableservice : TableService) { }

  ngOnInit(): void {
    this.tableservice.getAll().subscribe(
      data=>{
        this.listTable=data;
      }
     )
  }
  getbyid(idtable:number){
    this.tableservice.getbyid(idtable).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  updateTable(id:number,table:Table){
    this.tableservice.update(id,table).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  deleteTable(id:number){
    Swal.fire({
      title: 'Etes vous sur ?',
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, Supprimer!'
    }).then((result)=> {
    if(result.value){
      this.tableservice.delete(id).subscribe(
        data=>{
   if(data){
            Swal.fire(
              'Table supprimé!',
            ).then(()=>
             window.location.href = "http://localhost:4200/table"
            )
          }
        }
      )}
   
    })
  }
}
