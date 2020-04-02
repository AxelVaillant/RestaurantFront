import { Component, OnInit } from '@angular/core';
import { ElementcommandeService } from '../elementcommande.service';
import { ElementCommande } from '../models/elementcommande';

@Component({
  selector: 'app-list-elementcommande',
  templateUrl: './list-elementcommande.component.html',
  styleUrls: ['./list-elementcommande.component.css']
})
export class ListElementcommandeComponent implements OnInit {
listElco : ElementCommande[]=[];
  constructor(private elementcommandeservice: ElementcommandeService) { }

  ngOnInit(): void {
    this.elementcommandeservice.getAll().subscribe(
      data=>{
        this.listElco=data;
      }
     )
  }

}
