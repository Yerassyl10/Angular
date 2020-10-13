import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRouteBasedModule } from './chat-route-based/chat-route-based.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthenticationHandler } from './services/authenticationHandler';
import { RouteBasedChatComponent } from './chat-route-based/pages/route-based-chat/route-based-chat.component'
import { PostsComponent } from './posts/posts.component'
import { CreatePostComponent } from './create-post/create-post.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';
const routes: Routes = [
    {
        path: 'route-based',
        loadChildren: async () => {
            const module = await import(
                './chat-route-based/chat-route-based.module'
            );
            return module.ChatRouteBasedModule;
        },
         //canLoad: [AuthenticationHandler],
      
        
    },
    {
        path:'posts', component: PostsComponent,
        //canLoad: [AuthenticationHandler],
    },
    {
        path:'posts/create-post', component: CreatePostComponent
    },
    {
        path:'registr', component: RegistrationComponent
    },
    {
        path:'login', component: LoginComponent
    },
    {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full',
    },
    {
        path: 'posts/:id', 
        component: CommentsComponent },
    {
        path: '**',
        component: NotFoundComponent,
    },
  
    
        
    // {
    //     path: 'content-projection-based',
    //     loadChildren: async () => {
    //         const module = await import(
    //             './chat-content-projection-based/chat-content-projection-based.module'
    //         );
    //         return module.ChatContentProjectionBasedModule;
    //     },
    // },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
