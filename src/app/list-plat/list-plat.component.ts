import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat';

import { PlatService } from '../plat.service';
import { RoleGuardService } from '../role-guard.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
listPlat : Plat[]=[]
  constructor(private platservice :PlatService,private roleguardservice : RoleGuardService) { }

  ngOnInit(): void {
    this.platservice.getAll().subscribe(
      data=>{
        this.listPlat=data;
      }
     )

      if(localStorage.getItem("role")!=('Manager'|| 'Serveur')){
      document.getElementById('idm').style.visibility="hidden";
      document.getElementById('ids').style.visibility="hidden";
      }  
  }
  getbyid(idplat:number){
    this.platservice.getbyid(idplat).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  updatePlat(id:number,plat:Plat){
    if(localStorage.getItem("role")==('Manager'|| 'Serveur')){

      
    this.platservice.update(id,plat).subscribe(
      data=>(
        console.log(data)
      )
    )
  }else{
    Swal.fire({
      icon: 'error',
          text:'Accès refusé !',
           } )
  }}  
  deletePlat(id:number){
    if(localStorage.getItem("role")==('Manager'|| 'Serveur')){
      Swal.fire({
        title: 'Etes vous sur ?',
        text: "Vous ne pourrez pas revenir en arrière!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, Supprimer!'
      }).then((result)=>{
        if(result.value){
          this.platservice.delete(id).subscribe(
            data=>{
      
              if(data){
                Swal.fire(
                  'Plat supprimé ! ',
                ).then(()=> window.location.reload())
               
              }
            }
          )
        }
      })

  }else{
    Swal.fire({
      icon: 'error',
          text:'Accès refusé !',
          
    })

  }}


}
