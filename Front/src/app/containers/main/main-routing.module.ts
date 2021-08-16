import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'orders'
      },
      {
        path: 'clients',
        loadChildren: () => import('../../modules/client/client.module').then(m => m.ClientModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('../../modules/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../../modules/product/product.module').then(m => m.ProductModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
