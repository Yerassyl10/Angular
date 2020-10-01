import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQuizComponent } from './create-quiz/create-quiz.component'
import { ResultQuizComponent } from './result-quiz/result-quiz.component'
import { FillQuizComponent } from './fill-quiz/fill-quiz.component'

const routes: Routes = [
  { path: 'create-quiz', component: CreateQuizComponent },
  { path: 'result-quiz', component: ResultQuizComponent },
  { path: 'fill-quiz', component: FillQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
