import { CommonModule } from '@angular/common';
import { AjquizModule } from './ajquiz/ajquiz.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [      
    BrowserModule,    
    CommonModule,
    AjquizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
