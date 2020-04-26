import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { MasterPageComponent } from './CustomerApp.MasterPageComponent';
import { HomeComponent } from './CustomerApp.HomeComponent';
import { MainRoutes } from '../Routing/CustomerApp.MainRouting';

@NgModule({
  declarations: [
   MasterPageComponent, HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class MasterModule { }
