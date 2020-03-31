import { User } from './user';
import { Table } from './table';

export class Reservation{
    idreservation:number;
    nombre:number;
    datereservation:Date;
    client:User;
    table:Table;
}