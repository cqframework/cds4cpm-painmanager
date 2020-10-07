import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from './launch/launch.component';
import { PertinentConditionsComponent } from './pertinent-conditions/pertinent-conditions.component';
import { CurrentPainTreatmentsComponent } from './current-pain-treatments/current-pain-treatments.component';
import { UrineDrugScreeningComponent } from './urine-drug-screening/urine-drug-screening.component';
import { SharedDecisionMakingComponent } from './shared-decision-making/shared-decision-making.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    PertinentConditionsComponent,
    CurrentPainTreatmentsComponent,
    UrineDrugScreeningComponent,
    SharedDecisionMakingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
