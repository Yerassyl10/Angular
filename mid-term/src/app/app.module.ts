import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PostsComponent } from './posts/posts.component';
import {AppInterceptor} from "./appinterceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { PostFilterPipe } from './post-filter.pipe';
import { CreatePostComponent } from './create-post/create-post.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterBasedAlbumsComponent } from './router-based-albums/router-based-albums.component';
import { ContentPBasedAlbumsComponent } from './content-p-based-albums/content-p-based-albums.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostsComponent,
    PostFilterPipe,
    CreatePostComponent,
    RegistrationComponent,
    RouterBasedAlbumsComponent,
    ContentPBasedAlbumsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    HttpClientModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
    
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
