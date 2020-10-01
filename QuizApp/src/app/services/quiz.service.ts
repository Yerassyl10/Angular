import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {QuizQuestion} from '../models/question'


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  cnt = 0;
  timer = 0;
  questions: QuizQuestion[] = [];

  constructor() { }

  pushQuestion(question: QuizQuestion) {
      this.questions.push(question);
    
  }
  
  getQuestions(): Observable<QuizQuestion[]> {
    return of(this.questions);
  }
  
  deleteQuestions(){
    this.questions=[];
  }
  setResult(n: number){
    this.cnt=n;
  }
  getResult(): Observable<number>{
    return of(this.cnt);
  }
  setTimer(n: number){
    this.timer=n;
  }
  getTimer(): Observable<number>{
    return of(this.timer);
  }

}
