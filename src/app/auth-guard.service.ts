import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public router : Router) { }
  canActivate():boolean{
    if("user" in localStorage){
      if(localStorage.getItem("user")!='null'||''){
        return true
      }
      else{
        this.router.navigate(['user/login']);
        return false;
       
      }
   } else {
    this.router.navigate(['user/login']);
    return false;
   }
  
  }
}
