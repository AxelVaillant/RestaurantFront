import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { ListTableComponent } from './list-table/list-table.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { CreatePlatComponent } from './create-plat/create-plat.component';
import { ListPlatComponent } from './list-plat/list-plat.component';
import { ListCommandeComponent } from './list-commande/list-commande.component';
import { CreateCommandeComponent } from './create-commande/create-commande.component';
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUserComponent,
    HeaderComponent,
    HomeComponent,
    CreateRoleComponent,
    ListRoleComponent,
    ListTableComponent,
    CreateTableComponent,
    CreatePlatComponent,
    ListPlatComponent,
    ListCommandeComponent,
    CreateCommandeComponent,
    CreateFactureComponent,
    ListFactureComponent,
    ListReservationComponent,
    CreateReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
