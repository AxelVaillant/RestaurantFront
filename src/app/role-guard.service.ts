import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(public router : Router) { }
  canActivate():boolean{
    if(localStorage.getItem("role")==("Manager" || "Serveur")){
      return true
    }else{
      this.router.navigate(['user/login']);
return false
    }
    
  }
}
