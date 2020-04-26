import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SupplierRoutes} from '../Routing/CustomerApp.SupplierRouting';
import { SupplierComponent } from './CustomerApp.SupplierComponent';


@NgModule({
  declarations: [
   SupplierComponent
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(SupplierRoutes)
  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
