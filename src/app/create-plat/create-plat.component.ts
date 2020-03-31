import { Component, OnInit } from '@angular/core';
import { PlatService } from '../plat.service';
import { Plat } from '../models/plat';

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
      data=>(
        console.log(data)
      )
    )
  }
}
