import { NgModule, ModuleWithProviders } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from "@angular/common";
import { ToastComponent } from './toast.component';
import { defaultToastConfig, TOAST_TOKEN } from './toast-config';

@NgModule({
  imports: [OverlayModule, CommonModule],
  declarations: [ToastComponent],
  entryComponents: [ToastComponent]
})
export class ToastModule {
  public static forRoot(config=defaultToastConfig): ModuleWithProviders<any> {
        return {
            ngModule: ToastModule,
            providers: [
                {
                    provide: TOAST_TOKEN,
                    useValue: { ...defaultToastConfig, ...config },
                },
            ],
        };
    }
 }