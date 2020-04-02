import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
listReservation: Reservation[]=[]
  constructor(private reservationservice : ReservationService) { }

  ngOnInit(): void {
    this.reservationservice.getAll().subscribe(
      data=>{
        this.listReservation=data;
      }
     )
  }
  getbyid(idreservation:number){
    this.reservationservice.getbyid(idreservation).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
  deleteReservation(id:number){
  Swal.fire({
    title: 'Etes vous sur ?',
    text: "Vous ne pourrez pas revenir en arrière!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, Supprimer!'
  }).then((result)=> {
  if(result.value){
    this.reservationservice.delete(id).subscribe(
      data=>{
 if(data){
          Swal.fire(
            'Reservation supprimé!',
          ).then(()=>
           window.location.href = "http://localhost:4200/reservation"
          )
        }
      }
    )}
 
  })
}}
