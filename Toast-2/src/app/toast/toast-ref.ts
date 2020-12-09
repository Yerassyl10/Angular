import { OverlayRef } from '@angular/cdk/overlay';

export class ToastRef {
  constructor(private overlay: OverlayRef) { }

  closeToast() {
    this.overlay.dispose();
  }

  isVisible() {
    return this.overlay && this.overlay.overlayElement;
  }

  getToastPosition() {
    return this.overlay.overlayElement.getBoundingClientRect();
  }
  
}