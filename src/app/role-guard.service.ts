import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor() { }
  canActivate(){
    if(localStorage.getItem("role")=="Manager" || "Serveur"){
      return true
    }else{
return false
    }
    
  }
}
