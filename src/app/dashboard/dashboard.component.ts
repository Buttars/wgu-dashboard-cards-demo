import {
  Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  ViewChildren,
  QueryList,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';
import { DashboardOutletDirective } from '../dashboard-outlet.directive';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @Input() dashboard: Array<GridsterItem>;
  @ViewChildren(DashboardOutletDirective) dashboardOutlet: QueryList<DashboardOutletDirective>;
  options: GridsterConfig;

  constructor(private cfr: ComponentFactoryResolver, private cd: ChangeDetectorRef) {}

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
  }

  ngAfterViewInit() {
    this.dashboardOutlet.forEach((template, index) => {
      if (!this.dashboard[index]) {
        return;
      }
      this.loadContent(template, this.dashboard[index]);
    });
  }

  loadContent = (template: DashboardOutletDirective, item: GridsterItem) => {
    if (!item.component) {
      return;
    }

    const viewContainerRef = template.viewContainerRef;
    viewContainerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(item.component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DashboardCardComponent).data = item.data;
    this.cd.detectChanges();
  };

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
}
