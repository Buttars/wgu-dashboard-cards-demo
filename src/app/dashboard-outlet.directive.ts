import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDashboardOutlet]',
})
export class DashboardOutletDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
