import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'/banner', pathMatch: 'full'},
  { path: 'banner', loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule) },
  { path: 'e-commerce', loadChildren: () => import('./e-commerce/e-commerce.module').then(m => m.ECommerceModule) },
  { path: 'counter', loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
  { path: 'updated-counter', loadChildren: () => import('./updated-counter/updated-counter.module').then(m => m.UpdatedCounterModule) },
  { path: 'student-table', loadChildren: () => import('./student-table/student-table.module').then(m => m.StudentTableModule) },
  { path: 'dynamic-layout', loadChildren: () => import('./dynamic-layout/dynamic-layout.module').then(m => m.DynamicLayoutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
