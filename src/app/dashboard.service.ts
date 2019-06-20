import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { GridsterItem } from 'angular-gridster2';

import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private subject = new BehaviorSubject<Array<GridsterItem>>([]);
  dashboard$ = this.subject.asObservable();

  constructor() {
    const layout = [
      { id: 'id-card', cols: 1, rows: 1, y: 0, x: 0, component: 'idCard', data: {} },
      { id: 'name-card-landon', cols: 1, rows: 1, y: 0, x: 1, component: 'name', data: { name: 'Landon Buttars' } },
      { id: 'name-card-tim', cols: 1, rows: 1, y: 1, x: 0, component: 'name', data: { name: 'Tim Andrus' } },
    ];

    this.subject.next(layout);

    const savedState = this.getSavedState();
    if (savedState) {
      this.subject.next(JSON.parse(savedState));
    }

    this.dashboard$
      .pipe(
        tap(dashboard => {
          this.saveState(dashboard);
        })
      )
      .subscribe();
  }

  saveState = state => {
    localStorage.setItem('dashboard', JSON.stringify(state));
  };

  getSavedState = () => {
    return localStorage.getItem('dashboard');
  };

  removeItem = item => {
    const state = this.subject.value;
    const newState = state.splice(state.indexOf(item), 1);
    this.subject.next(newState);
  };

  addItem = () => {
    const state = this.subject.value;
    state.push({ x: 0, y: 0, cols: 1, rows: 1 });
    this.subject.next(state);
  };

  itemChange = (item: GridsterItem) => {
    const state = this.subject.value;
    const existingItem = state.find(i => i.id === item.id);

    // prettier-ignore
    if (existingItem === undefined) { return; }

    state[state.indexOf(existingItem)] = item;
    this.subject.next(state);

    console.log(this.subject.value);
  };

  isItemActive = (id: string) => {
    return !!this.subject.value.find(item => item.id === id);
  };
}
