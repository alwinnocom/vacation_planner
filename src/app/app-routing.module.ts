// This file is not necessary because Angular Material Tabs let you render all components on the same page (Singular Page App).

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { ChecklistComponent } from './checklist/checklist.component'
import { CostsComponent } from './costs/costs.component'
import { DestinationComponent } from './destination/destination.component'

const appRoutes: Routes = [
  { path: 'checklist', component: ChecklistComponent },
  { path: 'costs', component: CostsComponent },
  { path: 'destination', component: DestinationComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }




