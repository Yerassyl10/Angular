import { Component, OnInit } from '@angular/core';
import {QuizService} from '../services/quiz.service'
@Component({
  selector: 'app-result-quiz',
  templateUrl: './result-quiz.component.html',
  styleUrls: ['./result-quiz.component.scss']
})
export class ResultQuizComponent implements OnInit {
  result=0;
  constructor(private quizService: QuizService,) { }

  ngOnInit(): void {
    this.quizService.getResult()
      .subscribe(result => this.result = result);
  }

}
