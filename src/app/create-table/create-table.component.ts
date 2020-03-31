import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Table } from '../models/table';
import { User } from '../models/user';
import { TableService } from '../table.service';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.css']
})
export class CreateTableComponent implements OnInit {
  listUser : User[]=[];
  newTable : Table = new Table();
  constructor(private userservice : UserService,private tableservice : TableService) { }

  ngOnInit(): void {
    this.userservice.getAll().subscribe(
      data=>{
        this.listUser=data;
      }
    )
  }
  createTable(){
    this.tableservice.create(this.newTable).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
