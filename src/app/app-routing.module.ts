import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { ListTableComponent } from './list-table/list-table.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { ListPlatComponent } from './list-plat/list-plat.component';
import { CreatePlatComponent } from './create-plat/create-plat.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';


const routes: Routes = [
  {
    path:"user",
    component: ListUserComponent
  },
  {
    path:"user/save",
    component:CreateUserComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"role",
    component: ListRoleComponent
  },
  {
    path:"role/save",
    component:CreateRoleComponent
  },
  {
    path:"table",
    component:ListTableComponent
  },
  {
    path:"table/save",
    component:CreateTableComponent
  },
  {
    path:"plat",
    component:ListPlatComponent
  },
  {
    path:"plat/save",
    component:CreatePlatComponent
  },
  {
    path:"commande",
    component:ListCommandeComponent
  },
  {
    path:"commande/save",
    component:CreateCommandeComponent
  },
  {
    path:"facture",
    component:ListFactureComponent
  },
  {
    path:"facture/save",
    component:CreateFactureComponent
  },
  {
    path:"reservation",
    component:ListReservationComponent
  },
  {
    path:"reservation/save",
    component:CreateReservationComponent
  },
  {
    path:"plat/update/:id",
    component:UpdatePlatComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
