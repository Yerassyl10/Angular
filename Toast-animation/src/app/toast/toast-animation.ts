import { AnimationTriggerMetadata,trigger,state,transition,style,animate, } from '@angular/animations';

export const toastAnimations: {
    readonly openCloseL: AnimationTriggerMetadata;
    readonly openCloseR: AnimationTriggerMetadata;
    
} = {
    openCloseL: trigger('AnimationL', [
        state('open', style({ opacity: 1 })),
        transition('void => *', [style({ transform: 'translateX(-500%)'}), animate('0.5s')]),
        transition( '* => closed', animate('0.5s', style({transform: 'translateX(-500%)',  
            })),
        )
    ]),
    openCloseR: trigger('AnimationR', [
        state('open', style({ opacity: 1 })),
        transition('void => *', [style({ transform: 'translateX(500%)'}), animate('0.5s')]),
        transition( '* => closed', animate('0.5s', style({ transform: 'translateX(500%)',  
            })),
        )
    ]),

  
}

export type ToastAnimationState = 'open' | 'closed';
