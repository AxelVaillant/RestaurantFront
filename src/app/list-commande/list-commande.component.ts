import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-list-commande',
  templateUrl: './list-commande.component.html',
  styleUrls: ['./list-commande.component.css']
})
export class ListCommandeComponent implements OnInit {
  listCommande: Commande[]=[]
  listReservation : Reservation[]=[]
  constructor(private commandeservice : CommandeService, private reservationservice: ReservationService) { }

  ngOnInit(): void {
    this.commandeservice.getAll().subscribe(
      data=>{
        this.listCommande=data;
      }
     )
     this.reservationservice.getAll().subscribe(
      data=>{
        this.listReservation=data;
      }
     )
  }

}
