import {
    AnimationTriggerMetadata,
    trigger,
    state,
    transition,
    style,
    animate,
} from '@angular/animations';

export const toastAnimations: {
    readonly openClose: AnimationTriggerMetadata;
} = {
    openClose: trigger('fadeAnimation', [
        state('open', style({ opacity: 1 })),
        transition( '* => closed',
            animate('1s'),
        ),
    ]),
};

export type ToastAnimationState = 'open' | 'closed';
