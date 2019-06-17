import { Component, OnInit, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss'],
})
export class NameComponent extends DashboardCardComponent implements AfterViewChecked {
  constructor(private cd: ChangeDetectorRef) {
    super();
  }

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
}
