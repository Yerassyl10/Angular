import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {PostsComponent} from './posts/posts.component';
import {RegistrationComponent} from './registration/registration.component';
import {CreatePostComponent} from './create-post/create-post.component'

const routes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'registr', component: RegistrationComponent},
  {path: 'createpost', component: CreatePostComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
