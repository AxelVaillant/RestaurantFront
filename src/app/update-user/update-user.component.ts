import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';
import { Role } from '../models/Role';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  newUser : User=new User()
  idUserURL : number
  listRole : Role[]=[]
  constructor(private Userservice: UserService, private route : ActivatedRoute,private roleservice : RoleService) { 
    this.idUserURL = parseInt(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    this.roleservice.getAll().subscribe(
      data=>{
        this.listRole=data;
      }
    )
    console.log(this.idUserURL);
    this.Userservice.getbyid(this.idUserURL).subscribe(
      data=>(
        this.newUser=data
      )
    )
  }
  getbyid(id:number){
    this.Userservice.getbyid(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
    
      updateUser(id:number , User:User){
        this.Userservice.update(id,User).subscribe(
          data=>{
            console.log(data)
          }
        )
      }
      compareFn(user1: User, user2: User) {
        return user1 && user2 ? user1.iduser === user2.iduser : user1 === user2;
    }
}
