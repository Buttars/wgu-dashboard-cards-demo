import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';
import { DashboardCardType } from '../dashboard-card-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  constructor() {}

  ngOnInit() {
    this.options = {
      gridType: GridType.VerticalFixed,
      compactType: CompactType.CompactUp,
      minCols: 2,
      maxCols: 2,
      maxRows: 25,
      defaultItemCols: 1,
      defaultItemRows: 1,
      swap: true,
      setGridSize: true,
      draggable: {
        enabled: true,
      },
    };

    this.dashboard = [
      { cols: 1, rows: 1, y: 0, x: 0 },
      { cols: 1, rows: 1, y: 0, x: 1, type: DashboardCardType.IdCard },
      { cols: 1, rows: 1, y: 0, x: 4 },
      { cols: 1, rows: 1, y: 1, x: 5 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 0 },
      { cols: 1, rows: 1, y: 1, x: 6 },
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
  removeItem($event) {
    this.dashboard.splice(this.dashboard.indexOf($event), 1);
  }

  addItem() {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
}
