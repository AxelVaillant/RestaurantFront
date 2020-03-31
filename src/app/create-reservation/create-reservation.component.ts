import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { TableService } from '../table.service';
import { Table } from '../models/table';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  newReservation : Reservation = new Reservation()
listTable : Table[]=[]
  constructor(private reservationservice : ReservationService,private tableservice : TableService) { }

  ngOnInit(): void {
    this.tableservice.getAll().subscribe(
      data=>{
        this.listTable=data;
      }
    )
  }
  createReservation(){
    this.reservationservice.create(this.newReservation).subscribe(
      data=>(
        console.log(data)
      )
    )
  }
}
