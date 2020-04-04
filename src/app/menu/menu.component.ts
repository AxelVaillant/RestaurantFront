import { Component, OnInit } from '@angular/core';
import { PlatService } from '../plat.service';
import { ElementcommandeService } from '../elementcommande.service';
import { Plat } from '../models/plat';
import { ElementCommande } from '../models/elementcommande';
import { CommandeService } from '../commande.service';
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  newElement: ElementCommande =new ElementCommande
listPlat : Plat[]=[]
 listElementcommande: ElementCommande[]=[] 
 listCommande : Commande[]=[]
 newCommande : Commande=new Commande()
 listReservation:Reservation[]=[]
 idplatURL:number
 newPlat : Plat =new Plat()

  constructor(private route: ActivatedRoute,private platservice : PlatService,private elementservice : ElementcommandeService,private commandeservice : CommandeService,private reservationservice : ReservationService) {
    this.idplatURL=parseInt(this.route.snapshot.paramMap.get('id'))
   }

  ngOnInit(): void {


    this.platservice.getAll().subscribe(
      data=>{
        this.listPlat=data;
      }
     )
     this.elementservice.getAll().subscribe(
      data=>{
        this.listElementcommande=data;
      }
     )
     this.reservationservice.getAll().subscribe(
      data=>{
        this.listReservation=data;
      }
    )
    this.commandeservice.getAll().subscribe(
      data=>{
        this.listCommande=data;
      }
    )
  }

  createElementcommande(element:ElementCommande){
    this.elementservice.create(this.newElement).subscribe(
      data=>(
       console.log(data)

      )
    )  
  }

  total(id:number , commande:Commande){
    this.commandeservice.total(id,commande).subscribe(

      data=>{
        console.log(data)
      }
    )
  }

  createCommande(){
    this.commandeservice.create(this.newCommande).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  recup(id:number,element:ElementCommande){
    this.elementservice.recup(id,element).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  getbyidc(idcommande:number){
    this.commandeservice.getbyid(idcommande).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  getbyid(idplat:number){
    this.platservice.getbyid(idplat).subscribe(
      data=>(
        console.log(data)
      )
    )
  }





}
