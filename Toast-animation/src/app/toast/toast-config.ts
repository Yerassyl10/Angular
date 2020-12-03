import { InjectionToken } from '@angular/core';

export class Toast {

  title: string;
  text: string;
  isRed: boolean;
  timeDuration: number;
}


export interface ToastPosition {
    position: {
        top: number;
        left: number;
    };
}

export const defaultToastConfig: ToastPosition = {
    position: {
        top: 50, 
        left: 200,
    },
};

export const TOAST_TOKEN = new InjectionToken('toast-config');