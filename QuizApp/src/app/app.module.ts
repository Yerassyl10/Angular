import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { FillQuizComponent } from './fill-quiz/fill-quiz.component';
import { ResultQuizComponent } from './result-quiz/result-quiz.component';
import { NgModule,  } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    FillQuizComponent,
    ResultQuizComponent
  ],
  
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
