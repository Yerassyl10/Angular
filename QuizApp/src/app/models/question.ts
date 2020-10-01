export class QuizQuestion {



    question:String;
    ansOptions:String[];
    answer:String;
   
    constructor( question:String,
        ansOptions:String[], answer:String) {

  
   this.ansOptions=ansOptions;
   this.answer=answer;
   }
}


   