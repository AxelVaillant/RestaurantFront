import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user';
import Swal from 'sweetalert2';

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
      this.userservice.delete(id).subscribe(
        data=>{
   if(data){
            Swal.fire(
              'Utilisateur supprimé!',
            ).then(()=>
             window.location.href = "http://localhost:4200/user"
            )
          }
        }
      )}
   
    })

  }
}

