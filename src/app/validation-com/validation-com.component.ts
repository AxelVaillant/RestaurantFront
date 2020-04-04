import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/commande';
import { CommandeService } from '../commande.service';
import { ActivatedRoute } from '@angular/router';
import { ElementcommandeService } from '../elementcommande.service';
import { ElementCommande } from '../models/elementcommande';

@Component({
  selector: 'app-validation-com',
  templateUrl: './validation-com.component.html',
  styleUrls: ['./validation-com.component.css']
})
export class ValidationComComponent implements OnInit {

  newCommande : Commande=new Commande()
  idCommandeURL : number
listElco : ElementCommande[]=[]
  constructor(private Commandeservice: CommandeService, private route : ActivatedRoute,private elementcommandeservice : ElementcommandeService) { 
    this.idCommandeURL = parseInt(this.route.snapshot.paramMap.get('id'))
  }

  ngOnInit(): void {
    console.log(this.idCommandeURL);
    this.elementcommandeservice.filtre(this.idCommandeURL).subscribe(
      data=>{
        this.listElco=data;
      }
    )
    console.log(this.idCommandeURL);
    this.Commandeservice.getbyid(this.idCommandeURL).subscribe(
      data=>(
        this.newCommande=data
      )
    )
  }
  getbyid(id:number){
    this.Commandeservice.getbyid(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
    

  total(id:number , commande:Commande){
    this.Commandeservice.total(id,commande).subscribe(

      data=>{
        console.log(data)
      }
    )
  }
      compareFn(Commande1: Commande, Commande2: Commande) {
        return Commande1 && Commande2 ? Commande1.idcommande === Commande2.idcommande : Commande1 === Commande2;
    }
}
