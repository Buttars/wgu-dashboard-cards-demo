import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-id-card',
  templateUrl: './id-card.component.html',
  styleUrls: ['./id-card.component.scss'],
})
export class IdCardComponent extends DashboardCardComponent {}
