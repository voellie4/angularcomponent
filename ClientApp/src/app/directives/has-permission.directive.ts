import {
  Directive,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  Input
} from "@angular/core";

@Directive({
  selector: "[hasPermission]"
})
export class HasPermissionDirective {
  @Input()
  set hasPermission(val: any) {
    this._permissions = val;
    this.updateView();
  }

  private _permissions = [];

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  private updateView() {
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private checkPermission(): boolean {
    return this._permissions.some(p => p % 2 == 0);
  }
}
