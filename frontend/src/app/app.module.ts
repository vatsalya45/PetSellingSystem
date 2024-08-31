import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

import { AuthService } from './services/auth.service';
import { PetService } from './services/pet.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PetListComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AuthService, PetService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
