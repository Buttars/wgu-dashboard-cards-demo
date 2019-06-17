import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

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
}
