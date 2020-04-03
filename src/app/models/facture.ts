import { Reservation } from './reservation';
import { Commande } from './commande';

export class Facture{
    idfacture:number;
   montant:number;
   commande:Commande;
}