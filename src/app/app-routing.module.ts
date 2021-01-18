import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ChecklistComponent } from './checklist/checklist.component'
import { CostsComponent } from './costs/costs.component'
import { DatepickerComponent } from './datepicker/datepicker.component'
import { DestinationComponent } from './destination/destination.component'

const appRoutes: Routes = [
  { path: 'checklist', component: ChecklistComponent },
  { path: 'costs', component: CostsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'destination', component: DestinationComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }




