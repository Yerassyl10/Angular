import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemoryService {
  items = [];

  constructor() { }

  addToMemory(item: string) {
    if(this.items.length==0){
      this.items.push(item);
    } else{
      this.items[this.items.length-1]=eval(item+'+'+this.items[this.items.length-1]);
    }
  }

  getLastItem(): Observable<string>{
    return of(this.items[this.items.length-1])
  }

  getMemory(): Observable<string[]> {
    return of(this.items);
  }

  clearMemory() {
    this.items = [];
    return of(this.items);
  }

  storeToMemory(item: string) {
    this.items.push(item);
  }
}
