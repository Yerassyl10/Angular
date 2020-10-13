import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostFilterPipe } from './post-filter.pipe';
import { CreatePostComponent } from './create-post/create-post.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {AppInterceptor} from "./appinterceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { CommentsComponent } from './comments/comments.component';
@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    PostsComponent,
    PostFilterPipe,
    CreatePostComponent,
    RegistrationComponent,
    LoginComponent,
    CommentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
