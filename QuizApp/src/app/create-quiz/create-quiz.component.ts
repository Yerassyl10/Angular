import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { QuizService } from '../services/quiz.service';
import {QuizQuestion} from '../models/question'

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})

export class CreateQuizComponent implements OnInit {
  myForm: FormGroup;
  timer;
  a=[];
  selectedType: String;
  isForOne= false;
  isForAll=false;
  isNone=true;
  questionList: QuizQuestion[]=[];
  qNumber =0;

  constructor(private fb: FormBuilder,
              public quizService: QuizService) { }

  ngOnInit(): void {
  
    this.myForm=this.fb.group({
      question: '',
      options: this.fb.array([]),
      answer: ''
    })

    this.myForm.valueChanges.subscribe(console.log);
  }

  submit(){
    for (let control of this.myForm.get('options')['controls']) {
      this.a.push(control.controls['o'].value);
    } 

    const model: QuizQuestion = {
      question : this.myForm.controls['question'].value,
      answer : this.myForm.controls['answer'].value,
      ansOptions: this.a 
    }
    this.quizService.pushQuestion(model)
    this.getQuestions();
    this.qNumber=this.questionList.length;
    alert("You added " + this.qNumber + " questions");
    this.a=[];

  }

  get getOptions(){
    return this.myForm.get('options') as FormArray;
  }

  addOption(){
    const option = this.fb.group({
      o:[],
    })
    this.getOptions.push(option);
  }

  deleteOption(i){
    this.getOptions.removeAt(i);
  }
  setTimer(){

    if(this.isForAll==true){
      this.quizService.setTimer(this.form.controls['text1'].value)
    } else if(this.isForOne==true){
      this.quizService.setTimer(this.form.controls['text1'].value*(this.qNumber));
    } else if(this.isNone==true){
      this.quizService.setTimer(0);
    } 
  }
    textControl = new FormControl();
    radioControl1 = new FormControl();
    radioControl2 = new FormControl();
    radioControl3 = new FormControl();

  form = new FormGroup({
    text1: this.textControl,
    radio1: this.radioControl1,
    radio2: this.radioControl2,
    radio3: this.radioControl3,
  });

  timeClicked(n){
    if(n == 1){
      this.isForOne = false;
      this.isForAll = true;
      this.isNone = false;
    }
    else if(n == 2){
      this.isForOne = true;
      this.isForAll = false;
      this.isNone = false;
    }
    else if(n == 3){
      this.isForOne = false;
      this.isForAll = false;
      this.isNone = true;
    }
  }

  getQuestions(): void {
    this.quizService.getQuestions()
      .subscribe(questions => this.questionList = questions);
  }
}
