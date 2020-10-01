import { Component, OnInit } from '@angular/core';
import { QuizQuestion } from '../models/question';
import { QuizService } from '../services/quiz.service';
import { AnswerCheck } from '../models/answerCheck'


@Component({
  selector: 'app-fill-quiz',
  templateUrl: './fill-quiz.component.html',
  styleUrls: ['./fill-quiz.component.scss']
})
export class FillQuizComponent implements OnInit {
  questionList: QuizQuestion[];
  option: any[];
  time: number=0;
  cnt: number=0;
  i: number = 0;
  answerCheck: AnswerCheck[] = [];
  isSubmitted=false;

  constructor(
    private quizService: QuizService,
  ) { }

  ngOnInit(): void {
  }
    
  getQuestions(): void {
    this.quizService.getQuestions()
      .subscribe(questions => this.questionList = questions);
  }

  check(e, str: String, answer: String) {
    if (e.target.checked) {
      this.answerCheck.push(new AnswerCheck(str, answer));
    } 
  }

  submit(){
    window.alert('You have finished the quiz. Check result in -> Result Quiz');
    
    for (var i = 0; i < this.answerCheck.length; i++) {
      if (this.answerCheck[i].choosen == this.answerCheck[i].answer) {
        this.cnt++;
      }
      this.questionList=[];
    }
    this.quizService.setResult(this.cnt);
    this.isSubmitted=true;
  } 


  stopTimer() {
    if(this.time!=0){
      setTimeout(() => {
        if(this.isSubmitted==false){
          alert("Your time is up");
          this.submit();
        }
      }, this.time*1000);
    }
  }

    buttonClicked = false;

  startQuiz(){
    this.cnt = 0;
    this.isSubmitted = false;
    this.buttonClicked = !this.buttonClicked;
    this.getQuestions();
    this.quizService.getTimer()
    .subscribe(time => this.time = time);
    this.stopTimer()
  }
}

  