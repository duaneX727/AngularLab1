import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { CustomerRoutes } from '../Routing/CustomerApp.CustomerRouting';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MasterPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(CustomerRoutes)
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
