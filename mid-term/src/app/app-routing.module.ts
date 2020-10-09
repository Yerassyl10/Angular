import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {PostsComponent} from './posts/posts.component';
import {RegistrationComponent} from './registration/registration.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {RouterBasedAlbumsComponent} from './router-based-albums/router-based-albums.component';
import {ContentPBasedAlbumsComponent} from './content-p-based-albums/content-p-based-albums.component'
const routes: Routes = [
  // {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'registr', component: RegistrationComponent},
  {path: 'createpost', component: CreatePostComponent},
  {path: 'album1', component: RouterBasedAlbumsComponent},
  {path: 'album2', component: ContentPBasedAlbumsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
