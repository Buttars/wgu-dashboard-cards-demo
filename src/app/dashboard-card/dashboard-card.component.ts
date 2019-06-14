import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DashboardCardType } from '../dashboard-card-type';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {
  @Input() item;
  @Output() delete = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  get DashboardCardType() {
    return DashboardCardType;
  }
}
