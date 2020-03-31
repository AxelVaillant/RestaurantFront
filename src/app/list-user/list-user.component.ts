import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
listUser : User[]=[]
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
    this.userservice.getAll().subscribe(
      data=>{
        this.listUser=data;
      }
     )
  }
  getbyid(iduser:number){
    this.userservice.getbyid(iduser).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  updateUser(id:number,user:User){
    this.userservice.update(id,user).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  deleteUser(id:number){
    this.userservice.delete(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
