
import { Routes } from '@angular/router';
/* export function getTestModule() {
    return HomeComponent;
  }

export const MainRoutes: Routes = [
    {
     path : '',
     redirectTo: 'CustomerModule',
     pathMatch: 'full',
    },
    {
     path: '../Customer/CustomerApp.CustomerModule',
     loadChildren: getTestModule
    }
   ];
 */

export const MainRoutes = [
    { path: 'Home', component: HomeComponent},
    { path: 'Customer', loadChildren: '../Customer/CustomerApp.CustomerModule#CustomerModule'},
    { path: 'Supplier', loadChildren: '../Supplier/CustomerApp.SupplierModule#SupplierModule'},
    { path: '', component: HomeComponent }
];

