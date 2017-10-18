import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RoomListComponent } from './room-list/room-list.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CustomerComponent } from './customer/customer.component';
import { TransaksiComponent } from './transaksi/transaksi.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomListComponent,
    LoginComponent,
    HomePageComponent,
    CustomerComponent,
    TransaksiComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
