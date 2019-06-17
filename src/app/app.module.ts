import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IdCardComponent } from './id-card/id-card.component';
import { DashboardOutletDirective } from './dashboard-outlet.directive';
import { NameComponent } from './name/name.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    IdCardComponent,
    DashboardOutletDirective,
    NameComponent,
    DashboardCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, GridsterModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [IdCardComponent, NameComponent],
})
export class AppModule {}
