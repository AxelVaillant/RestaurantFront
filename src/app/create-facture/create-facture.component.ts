import { Component, OnInit } from '@angular/core';
import { Facture } from '../models/facture';
import { Reservation } from '../models/reservation';
import { FactureService } from '../facture.service';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {
newFacture:Facture= new Facture()
listReservation : Reservation[]=[]
  constructor(private factureservice:FactureService,private reservationservice : ReservationService) { }

  ngOnInit(): void {
    this.reservationservice.getAll().subscribe(
      data=>{
        this.listReservation=data;
      }
    )
  }
  createFacture(){
    this.factureservice.create(this.newFacture).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
