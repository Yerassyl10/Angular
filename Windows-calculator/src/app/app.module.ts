import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator/calculator.component';
import { HistoryService } from './services/history.service';
import { MemoryService } from './services/memory.service';
@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HistoryService, MemoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
