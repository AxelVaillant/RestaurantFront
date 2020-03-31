import { Component, OnInit } from '@angular/core';
import { Facture } from '../models/facture';
import { FactureService } from '../facture.service';

@Component({
  selector: 'app-list-facture',
  templateUrl: './list-facture.component.html',
  styleUrls: ['./list-facture.component.css']
})
export class ListFactureComponent implements OnInit {
listFacture: Facture[]=[]
  constructor(private factureservice : FactureService) { }

  ngOnInit(): void {
    this.factureservice.getAll().subscribe(
      data=>{
        this.listFacture=data;
      }
     )
  }

}
