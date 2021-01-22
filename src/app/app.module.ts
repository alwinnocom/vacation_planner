import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CostsComponent } from './costs/costs.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { HomeStepperComponent } from './home-stepper/home-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistComponent,
    CostsComponent,
    DatepickerComponent,
    HeaderComponent,
    HomeComponent,
    HomeStepperComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
