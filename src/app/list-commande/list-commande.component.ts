import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from '../models/commande';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {
  listCommande: Commande[]=[]
  constructor(private commandeservice : CommandeService) { }

  ngOnInit(): void {
    this.commandeservice.getAll().subscribe(
      data=>{
        this.listCommande=data;
      }
     )
  }

}
