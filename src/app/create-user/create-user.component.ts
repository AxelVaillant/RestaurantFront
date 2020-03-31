import { Component, OnInit } from '@angular/core';
import { Role } from '../models/Role';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  listRole : Role[]=[];
  listUser : User[]=[];
  newUser : User =new User();
  constructor(private userservice : UserService,private roleservice : RoleService) { }

  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
      data=>{
        this.listRole=data;
      }
    )
  }
  createUser(){
    this.userservice.create(this.newUser).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
