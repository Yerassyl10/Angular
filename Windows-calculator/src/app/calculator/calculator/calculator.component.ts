import { Component, OnInit } from '@angular/core';
import {HistoryService} from 'src/app/services/history.service'
import {MemoryService} from 'src/app/services/memory.service'
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(public historyService: HistoryService, public memoryService: MemoryService) { }

  ngOnInit(): void {

  }

  input:string = '';
  input2:string='';
  result:string = '';
  finished:boolean=false;
  historyItems: String[];
  item:string ='';
  memory:string[];

  getHistory(): void {
    this.historyService.getHistory()
        .subscribe(items => this.historyItems = items);
  }

  addToHistory(item): void {
      this.historyService.addToHistory(item);
  }

  clearHistory(): void{
    this.historyService.clearHistory()
        .subscribe(items => this.historyItems = items);
  }

  enterNum(n: string) {
    if(this.finished==true){
      this.input2="";
      this.input="";
      this.result="";
      this.item="";
      this.finished=false;
    }
    this.input += n
  }

  operate(n: string) {
    this.input2+=this.input;
    this.item=this.input2; 
    if (n=='+'|| n == '-'|| n=='*'|| n=='/')  {
      this.input2 +=n;
      this.item+=n;
    }
    this.input="";
    
  }

  opposite() {
    this.input= (1/eval(this.input)).toString();
  }
  negate(){
    this.input= (eval(this.input)*(-1)).toString();
  }
  percentage(){
    this.input= (eval(this.input)*(0.01)).toString();
  }
  square(){
    this.input= (eval(this.input)*eval(this.input)).toString(); 
  }
  sqrroot(){
    this.input= (Math.sqrt(eval(this.input))).toString(); 
  }

  calcAnswer() {
    let resent = this.input2+this.input;
    this.result = eval(resent);
  }

  getAnswer() {
    this.calcAnswer();
    this.input2=this.input2+this.input+'=';
    this.input = this.result.toString();
    this.item=this.input2+this.input;
    
    this.addToHistory(this.item);
    this.getHistory();
    this.finished=true;
  }

  resetC(){
    this.input="";
    this.input2="";
    this.result="";
  }
  resetCE(){
    this.input="";
    if(this.finished==true){
      this.input2="";
    }
  }
  backspace(){
    this.input=this.input.substr(0, this.input.length-1);
  }

  memoryPlus(){
    this.memoryService.addToMemory(this.input);
    this.memoryService.getMemory()
        .subscribe(Mitems => this.memory = Mitems);
  }
  memoryMinus(){
    this.memoryService.addToMemory(eval(this.input+'*(-1)'));
    this.memoryService.getMemory()
        .subscribe(Mitems => this.memory = Mitems);
  }
  memoryClear(){
    this.memoryService.clearMemory();
    this.memoryService.getMemory()
        .subscribe(Mitems => this.memory = Mitems);
  }
  memoryRecall(){
    this.memoryService.getLastItem()
        .subscribe(Litem => this.input = Litem);
  }
  memoryStore(){
    this.memoryService.storeToMemory(this.input);
  }


}
