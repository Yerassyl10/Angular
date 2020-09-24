import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  items = [];

  constructor() { }
  addToHistory(item: any) {
    this.items.push(item);
  }

  getHistory(): Observable<String[]> {
    return of(this.items);
  }

  clearHistory(): Observable<String[]>  {
    this.items = [];
    return of(this.items);
  }
}
