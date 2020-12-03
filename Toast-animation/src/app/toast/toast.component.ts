import { Component, OnInit, OnDestroy, Inject } from "@angular/core";
import { AnimationEvent } from "@angular/animations";
import { Toast, TOAST_TOKEN, ToastPosition } from "./toast-config";
import { ToastRef } from "./toast-ref";
import { toastAnimations, ToastAnimationState } from "./toast-animation";


@Component({
  selector: "app-toast",
  templateUrl: "./toast.component.html",
  styleUrls: ["toast.component.css"],
  animations: [toastAnimations.openCloseL, toastAnimations.openCloseR]
})
export class ToastComponent implements OnInit, OnDestroy {
  animationState: ToastAnimationState = "open";
  iconType: string;
  isRed: boolean;
  public intervalId: number; 

  constructor(
    public data: Toast,
    public ref: ToastRef,
    @Inject(TOAST_TOKEN) private toastConfig: ToastPosition)   
    {
      
    }
    
  ngOnInit() {
   
    this.intervalId = window.setTimeout(() => (this.animationState = "closed"), this.data.timeDuration);
 
    if(this.data.isRed==true){
      this.toastConfig.position = {
        top: 50,
        left : 200,
  
      }
    }else  {
      this.toastConfig.position = {
        top: 50,
        left : 1000,
  
      }
    }
    
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }

  close() {
    this.ref.closeToast();
  } 

  finished(e: AnimationEvent) {

    const { toState } = e;
    const isFadeout = (toState as ToastAnimationState) === "closed";
    const isFinished = this.animationState === "closed";

    if (isFadeout && isFinished) {
      this.close();
    }
  }
  
}
