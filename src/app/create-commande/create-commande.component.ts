import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { ReservationService } from '../reservation.service';
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-create-commande',
  templateUrl: './create-commande.component.html',
  styleUrls: ['./create-commande.component.css']
})
export class CreateCommandeComponent implements OnInit {
newCommande : Commande=new Commande()
listReservation:Reservation[]=[]
  constructor(private commandeservice :CommandeService,private reservationservice: ReservationService) { }

  ngOnInit(): void {
    this.reservationservice.getAll().subscribe(
      data=>{
        this.listReservation=data;
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
}
