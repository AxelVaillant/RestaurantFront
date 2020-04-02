import { Component, OnInit } from '@angular/core';
import { PlatService } from '../plat.service';
import { Plat } from '../models/plat';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-plat',
  templateUrl: './create-plat.component.html',
  styleUrls: ['./create-plat.component.css']
})
export class CreatePlatComponent implements OnInit {
newPlat : Plat=new Plat()
  constructor(private platservice: PlatService) { }

  ngOnInit(): void {
  }
  createPlat(){
    this.platservice.create(this.newPlat).subscribe(
      data=>{
        if(data['idplat'] ==0){

        }else if(data['idplat']){
          Swal.fire(
            'Plat ajouté !',
          ).then(()=>
          window.location.href ="http://localhost:4200/plat")
          
        }
      }
    )
  }
}
