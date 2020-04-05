import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user : User = new User()
userloggedin: User
  constructor(private userservice : UserService) { }

  ngOnInit(): void {
  }
login(){
  this.userservice.login(this.user).subscribe(
    data=>{
      if(data){
        this.userloggedin=data;
        localStorage.setItem("user",this.userloggedin.nomuser)
        localStorage.setItem("role",this.userloggedin.role.nomrole)
        if(data['nomuser']!=null){
          Swal.fire({
            icon: 'success',
            text:'Authentification Réussie !',
           }).then(()=>
          window.location.href ="http://localhost:4200/plat")
        }
        else{     Swal.fire({
          icon: 'error',
          text:'Authentification échouée !',
         })
        }
      }
}
  )
}
logOut(){
  localStorage.clear()
}
}
