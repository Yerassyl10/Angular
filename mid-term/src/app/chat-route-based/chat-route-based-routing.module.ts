import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationHandler } from '../services/authenticationHandler';
import { ChatComponent } from '../ui/components/chat/chat.component';
import { SelectContactComponent } from '../ui/components/select-contact/select-contact.component';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { RouteBasedChatComponent } from './pages/route-based-chat/route-based-chat.component';

const chatRoutes: Routes = [
    {
        path: '',
        component: SelectContactComponent,
    },
    {
        path: ':contact',
        component: ChatComponent,
        // canActivate: [AuthenticationHandler],
        // canDeactivate: [AuthenticationHandler],
        // resolve: {
        //     contact: ContactResolver,
        //     messages: MessagesResolver,
        // },
    },
    
];

const routes: Routes = [
    {
        path: '',
        redirectTo: 'chat',
        component: RouteBasedChatComponent
    },
    {
        path: 'chat',
        component: RouteBasedChatComponent,
    //     canActivateChild: [AuthenticationHandler],
        children: chatRoutes,
     },
     {
        redirectTo: 'chat',
        component: RouteBasedChatComponent
     }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatRouteBasedRoutingModule {}
