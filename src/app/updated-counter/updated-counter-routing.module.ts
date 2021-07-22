import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatedCounterComponent } from './updated-counter.component';

const routes: Routes = [{ path: '', component: UpdatedCounterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatedCounterRoutingModule { }
