import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../table.service';
import { Table } from '../models/table';
import { User } from '../models/user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-table',
  templateUrl: './update-table.component.html',
  styleUrls: ['./update-table.component.css']
})
export class UpdateTableComponent implements OnInit {
  newTable : Table=new Table()
  listUser: User[]=[]
  idTableURL : number
  constructor(private Tableservice: TableService, private route : ActivatedRoute,private userservice:UserService) { 
    this.idTableURL = parseInt(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.userservice.getAll().subscribe(
      data=>{
        this.listUser=data;
      }
    )
    console.log(this.idTableURL);
    this.Tableservice.getbyid(this.idTableURL).subscribe(
      data=>(
        this.newTable=data
      )
    )

  }
  getbyid(id:number){
    this.Tableservice.getbyid(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
    
      updateTable(id:number , Table:Table){
        this.Tableservice.update(id,Table).subscribe(
          data=>{
            if(data['idtable'] ==0){
    
            }else if(data['idtable']){
              Swal.fire(
                'Table modifié !',
              ).then(()=>
              window.location.href ="http://localhost:4200/table")
              
            }
          }
        )
      }
      compareFn(table1: Table, table2: Table) {
        return table1 && table2 ? table1.idtable === table2.idtable : table1 === table2;
    }
}
