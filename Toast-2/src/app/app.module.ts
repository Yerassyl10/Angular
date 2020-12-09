import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToastModule } from './toast';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    ],
    
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
