import { Component, OnInit } from '@angular/core';
import { ElementcommandeService } from '../elementcommande.service';
import { ElementCommande } from '../models/elementcommande';
import { Commande } from '../models/commande';
import { Plat } from '../models/plat';
import { CommandeService } from '../commande.service';
import { PlatService } from '../plat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-elementcommande',
  templateUrl: './list-elementcommande.component.html',
  styleUrls: ['./list-elementcommande.component.css']
})
export class ListElementcommandeComponent implements OnInit {
listElco : ElementCommande[]=[];
listPlat: Plat[]=[]
listCommande: Commande[]=[]
idCommandeURL : number
newElement:ElementCommande=new ElementCommande()
newCommande: Commande = new Commande()

  constructor(private elementcommandeservice: ElementcommandeService,private route : ActivatedRoute,private commandeservice : CommandeService,private platservice : PlatService) {
    this.idCommandeURL = parseInt(this.route.snapshot.paramMap.get('id'))
   }

  ngOnInit(): void {
    console.log(this.idCommandeURL);
    this.elementcommandeservice.filtre(this.idCommandeURL).subscribe(
      data=>{
        this.listElco=data;
      }
    )


     

  }



}
