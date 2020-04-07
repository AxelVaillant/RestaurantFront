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
import { ListFactureComponent } from './list-facture/list-facture.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { ListElementcommandeComponent } from './list-elementcommande/list-elementcommande.component';
import { CreateElementcommandeComponent } from './create-elementcommande/create-elementcommande.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateTableComponent } from './update-table/update-table.component';
import { ValidationComComponent } from './validation-com/validation-com.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard.service';
import { RoleGuardService } from './role-guard.service';


const routes: Routes = [
  {
    path:"user",
    component: ListUserComponent,
    canActivate :[RoleGuardService]
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
    component: ListRoleComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"role/save",
    component:CreateRoleComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"table",
    component:ListTableComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"table/save",
    component:CreateTableComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"plat",
    component:ListPlatComponent
  },
  {
    path:"plat/save",
    component:CreatePlatComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"commande",
    component:ListCommandeComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"commande/total/:id",
    component:ValidationComComponent
  },
  {
    path:"facture",
    component:ListFactureComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"facture/save",
    component:CreateFactureComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"reservation",
    component:ListReservationComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"reservation/save",
    component:CreateReservationComponent,
    canActivate:[AuthGuardService]
  },
  {
    path:"plat/update/:id",
    component:UpdatePlatComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"elementcommande/:id",
    component: ListElementcommandeComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"elementcommandesave",
    component: MenuComponent,
    canActivate:[AuthGuardService]

  },
  {
    path:"user/update/:id",
    component: UpdateUserComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"table/update/:id",
    component: UpdateTableComponent,
    canActivate :[RoleGuardService]
  },
  {
    path:"user/login",
    component : LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
