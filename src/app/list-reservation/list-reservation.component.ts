import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation';
import { ReservationService } from '../reservation.service';

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
    this.reservationservice.delete(id).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
