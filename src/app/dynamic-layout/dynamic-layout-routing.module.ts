import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicLayoutComponent } from './dynamic-layout.component';

const routes: Routes = [{ path: '', component: DynamicLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicLayoutRoutingModule { }
