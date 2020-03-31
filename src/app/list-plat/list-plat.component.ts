import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat';

import { PlatService } from '../plat.service';

@Component({
  selector: 'app-list-plat',
  templateUrl: './list-plat.component.html',
  styleUrls: ['./list-plat.component.css']
})
export class ListPlatComponent implements OnInit {
listPlat : Plat[]=[]
  constructor(private platservice :PlatService) { }

  ngOnInit(): void {
    this.platservice.getAll().subscribe(
      data=>{
        this.listPlat=data;
      }
     )
  }
  getbyid(idplat:number){
    this.platservice.getbyid(idplat).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  updatePlat(id:number,plat:Plat){
    this.platservice.update(id,plat).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  deletePlat(id:number){
    this.platservice.delete(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
