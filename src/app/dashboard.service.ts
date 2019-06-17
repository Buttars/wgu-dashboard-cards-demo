import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GridsterItem } from 'angular-gridster2';

import { IdCardComponent } from './id-card/id-card.component';
import { NameComponent } from './name/name.component';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private subject = new BehaviorSubject<Array<GridsterItem>>([]);
  dashboard$ = this.subject.asObservable();

  constructor() {
    const defaultDashboard = [
      { cols: 1, rows: 1, y: 0, x: 0, component: IdCardComponent, data: {} },
      { cols: 1, rows: 1, y: 0, x: 1, component: NameComponent, data: { name: 'Landon Buttars' } },
      { cols: 1, rows: 1, y: 1, x: 0, component: NameComponent, data: { name: 'Tim Andrus' } },
    ];

    const storageDashboard = JSON.parse(localStorage.getItem('dashboard'));

    console.log(storageDashboard);

    this.subject.next(defaultDashboard);

    this.dashboard$
      .pipe(
        tap(dashboard => {
          localStorage.setItem('dashboard', JSON.stringify(dashboard));
        })
      )
      .subscribe();
  }

  removeItem(item) {
    const state = this.subject.value;
    const newState = state.splice(state.indexOf(item), 1);
    this.subject.next(newState);
  }

  addItem() {
    const state = this.subject.value;
    state.push({ x: 0, y: 0, cols: 1, rows: 1 });
    this.subject.next(state);
  }
}
