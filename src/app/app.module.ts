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
import { CreateFactureComponent } from './create-facture/create-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { ListReservationComponent } from './list-reservation/list-reservation.component';
import { CreateReservationComponent } from './create-reservation/create-reservation.component';
import { UpdatePlatComponent } from './update-plat/update-plat.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ListElementcommandeComponent } from './list-elementcommande/list-elementcommande.component';
import { CreateElementcommandeComponent } from './create-elementcommande/create-elementcommande.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateTableComponent } from './update-table/update-table.component';
import { ValidationComComponent } from './validation-com/validation-com.component';
registerLocaleData(localeFr, 'fr');

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
    ValidationComComponent,
    CreateFactureComponent,
    ListFactureComponent,
    ListReservationComponent,
    CreateReservationComponent,
    UpdatePlatComponent,
    ListElementcommandeComponent,
    CreateElementcommandeComponent,
    MenuComponent,
    UpdateUserComponent,
    UpdateTableComponent
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
