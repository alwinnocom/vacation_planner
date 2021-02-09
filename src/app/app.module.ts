import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DestinationComponent } from './destination/destination.component';
import { CostsComponent } from './costs/costs.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { ChecklistMobileComponent } from './checklist/checklist-mobile/checklist-mobile.component';
import { ChecklistDesktopComponent } from './checklist/checklist-desktop/checklist-desktop.component';
import { CostsMobileComponent } from './costs/costs-mobile/costs-mobile.component';
import { CostsDesktopComponent } from './costs/costs-desktop/costs-desktop.component';
import { DestinationDesktopComponent } from './destination/destination-desktop/destination-desktop.component';
import { DestinationMobileComponent } from './destination/destination-mobile/destination-mobile.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';
import { HomeDesktopComponent } from './home/home-desktop/home-desktop.component';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    ChecklistComponent,
    CostsComponent,
    DestinationComponent,
    HeaderComponent,
    HomeComponent,
    ChecklistMobileComponent,
    ChecklistDesktopComponent,
    CostsMobileComponent,
    CostsDesktopComponent,
    DestinationDesktopComponent,
    DestinationMobileComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    HomeDesktopComponent,
    HomeMobileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
