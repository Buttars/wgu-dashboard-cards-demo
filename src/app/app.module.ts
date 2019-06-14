import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
@NgModule({
  declarations: [AppComponent, DashboardComponent, DashboardCardComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, GridsterModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
