import { Component, OnInit } from '@angular/core';
import { Table } from '../models/table';
import { TableService } from '../table.service';

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
    this.tableservice.delete(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
