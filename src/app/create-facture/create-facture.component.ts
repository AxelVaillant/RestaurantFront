import { Component, OnInit } from '@angular/core';
import { Facture } from '../models/facture';
import { Reservation } from '../models/reservation';
import { FactureService } from '../facture.service';
import { ReservationService } from '../reservation.service';
import Swal from 'sweetalert2';
import { Commande } from '../models/commande';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-create-facture',
  templateUrl: './create-facture.component.html',
  styleUrls: ['./create-facture.component.css']
})
export class CreateFactureComponent implements OnInit {
newFacture:Facture= new Facture()
listReservation : Reservation[]=[]
listCommande : Commande[]=[]
  constructor(private factureservice:FactureService,private reservationservice : ReservationService,private commandeservice : CommandeService) { }

  ngOnInit(): void {
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
  createFacture(){
    this.factureservice.create(this.newFacture).subscribe(
      data=>{
        if(data['idfacture'] ==0){

        }else if(data['idfacture']){
          Swal.fire(
            'Facture créée !',
          ).then(()=>
          window.location.href ="http://localhost:4200/facture")
          
        }
      }
    )
  }
}
