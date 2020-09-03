export class Calculator {
  a: number;
  b: number;

  constructor(obj:any) {
    this.a=obj.a;
    this.b=obj.b;
  }

  calculate(operation:string){
    if(operation=="+"){
      return this.a+this.b;
    } else if(operation=="-"){
      return this.a-this.b;
    } else if(operation=="*"){
      return this.a*this.b;
    } else if(operation=="/"){
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

//   constructor(a: number,b: number) {
//     this.a=a;
//     this.b=b;
//   }

//   calculate(operation:string){
//     if(operation=="+"){
//       return this.a+this.b;
//     } else if(operation=="-"){
//       return this.a-this.b;
//     } else if(operation=="*"){
//       return this.a*this.b;
//     } else if(operation=="/"){
//       return this.a/this.b;
//     } else {
//       return "error!!!"
//     }
//   }
// }
