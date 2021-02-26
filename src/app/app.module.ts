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
import { DestinationDesktopComponent } from './destination/destination-desktop/destination-desktop.component';
import { DestinationMobileComponent } from './destination/destination-mobile/destination-mobile.component';
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './header/header-desktop/header-desktop.component';
import { HomeLandingPageComponent } from './home/home-landing-page/home-landing-page.component';
import { HomeCardsComponent } from './home/home-cards/home-cards.component';
import { HomeTestimonialComponent } from './home/home-testimonial/home-testimonial.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { CostsModalComponent } from './costs/costs-modal/costs-modal.component';
import { LoadingComponent } from './home/loading/loading.component';


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
    DestinationDesktopComponent,
    DestinationMobileComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    HomeLandingPageComponent,
    HomeCardsComponent,
    HomeTestimonialComponent,
    HomeFooterComponent,
    CostsModalComponent,
    LoadingComponent
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
