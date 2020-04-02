import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';
import { ReservationService } from '../reservation.service';
import { Commande } from '../models/commande';
import { Reservation } from '../models/reservation';
import Swal from 'sweetalert2';

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
      data=>{
        if(data['idcommande'] ==0){

        }else if(data['idcommande']){
          Swal.fire(
            'Commande effectuée !',
          ).then(()=>
          window.location.href ="http://localhost:4200/commande")
          
        }
      }
    )
  }
  getbyid(idcommande:number){
    this.commandeservice.getbyid(idcommande).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
