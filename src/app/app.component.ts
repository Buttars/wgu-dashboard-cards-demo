import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wgu-dashbaord-cards';
  dashboard$;

  constructor(private dashboardService: DashboardService) {
    this.dashboard$ = dashboardService.dashboard$;
  }

  itemChange = (item: GridsterItem) => {
    this.dashboardService.itemChange(item);
  };
}
