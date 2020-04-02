import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation.service';
import { TableService } from '../table.service';
import { Table } from '../models/table';
import { Reservation } from '../models/reservation';
import { UserService } from '../user.service';
import { User } from '../models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {
  newReservation : Reservation = new Reservation()
listTable : Table[]=[]
listUser: User[]=[]
  constructor(private reservationservice : ReservationService,private tableservice : TableService,private userservice : UserService) { }

  ngOnInit(): void {
    this.tableservice.getAll().subscribe(
      data=>{
        this.listTable=data;
      }
    )
    this.userservice.getAll().subscribe(
      data=>{
        this.listUser=data;
      }
    )
  }
  createReservation(){
    this.reservationservice.create(this.newReservation).subscribe(
      data=>{
     if(data){
          Swal.fire(
            'Reservation effectué !',
          ).then(()=>
          window.location.href ="http://localhost:4200/reservation")
          
        }
        else{ 
          Swal.fire(
            'Reservation impossible'
          )
        }
      }
      )
  }
}
