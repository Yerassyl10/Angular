import { Injectable, Injector, Inject } from '@angular/core';
import { Overlay} from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ToastComponent } from './toast.component';
import { Toast, TOAST_TOKEN, ToastPosition } from './toast-config';
import { ToastRef } from './toast-ref';
 
@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private lastToast: ToastRef;

  constructor(
    private overlay: Overlay,
    private pInjector: Injector,
    @Inject(TOAST_TOKEN) private toastConfig: ToastPosition
  ) { }

  show(data: Toast) {
    const positionStrategy = this.getToastPositionWay();
    const overlayRef = this.overlay.create({ positionStrategy });
    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;
    const injector = this.getInjector(data, toastRef, this.pInjector);
    const portal = new ComponentPortal(ToastComponent, null, injector);

    overlayRef.attach(portal);
    return toastRef;
  } 

  getToastPositionWay() {
    return this.overlay.position()
      .global()
      .top(this.getToastPosition())
      .left(this.toastConfig.position.left + 'px');
  }

  getToastPosition() {
    const lastToastIsVisible = this.lastToast && this.lastToast.isVisible();
    const position = lastToastIsVisible  ? this.lastToast.getToastPosition().bottom : this.toastConfig.position.top;
    return position + 'px';
  }

  getInjector(data: Toast, toastRef: ToastRef, pInjector: Injector) {
    const tokens = new WeakMap();
    tokens.set(Toast, data);
    tokens.set(ToastRef, toastRef);
    return new PortalInjector(pInjector, tokens);
  }
}