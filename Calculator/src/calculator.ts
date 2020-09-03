export class Calculator {
  a: number;
  b: number;
  operation: string;

  constructor(obj:any) {
    this.a=obj.a;
    this.b=obj.b;
    this.operation=obj.op;
  }

  calculate(){
    if(this.operation=="+"){
      return this.a+this.b;
    } else if(this.operation=="-"){
      return this.a-this.b;
    } else if(this.operation=="*"){
      return this.a*this.b;
    } else if(this.operation=="/"){
      return this.a/this.b;
    } else {
      return "error!!!"
    }
  }
}

//можно и с обычным конструктором
// export class Calculator  {
//   a: number;
//   b: number;
//   operation: string;

//   constructor(a: number,b: number, op: string) {
//     this.a=a;
//     this.b=b;
//     this.operation=op;
//   }

//   calculate(){
//     if(this.operation=="+"){
//       return this.a+this.b;
//     } else if(this.operation=="-"){
//       return this.a-this.b;
//     } else if(this.operation=="*"){
//       return this.a*this.b;
//     } else if(this.operation=="/"){
//       return this.a/this.b;
//     } else {
//       return "error!!!"
//     }
//   }
// }
