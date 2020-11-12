import { InjectionToken, TemplateRef } from '@angular/core';

export class Toast {

  title: string;
  text: string;
  isRed: boolean;
  hasCloseButton: boolean;
  showTitle: boolean;
  timeDuration: number;
  horizontal: number;
  vertical: number;
  
}


export interface ToastPosition {
    position: {
        top: number;
        left: number;
    };
    
}

export const defaultToastConfig: ToastPosition = {
    position: {
        top: 300,
        left: 300,
    }
    
};

export const TOAST_TOKEN = new InjectionToken('toast-config');