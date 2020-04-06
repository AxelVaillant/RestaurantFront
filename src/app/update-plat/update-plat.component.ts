import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat';
import { PlatService } from '../plat.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-plat',
  templateUrl: './update-plat.component.html',
  styleUrls: ['./update-plat.component.css']
})
export class UpdatePlatComponent implements OnInit {
newPlat : Plat=new Plat()
idplatURL : number
  constructor(private platservice: PlatService, private route : ActivatedRoute) {
    this.idplatURL = parseInt(this.route.snapshot.paramMap.get('id'))
   }

  ngOnInit(): void {
    console.log(this.idplatURL);
    this.platservice.getbyid(this.idplatURL).subscribe(
      data=>(
        this.newPlat=data
      )
    )
  }
  getbyid(id:number){
    this.platservice.getbyid(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
    
      updatePlat(id:number , plat:Plat){
        this.platservice.update(id,plat).subscribe(
          data=>{
            if(data['idplat'] ==0){
    
            }else if(data['idplat']){
              Swal.fire(
                'Plat modifié !',
              ).then(()=>
              window.location.href ="http://localhost:4200/plat")
              
            }
          }
        )
      }

}
