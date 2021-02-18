import { QuizComponent } from './quiz/quiz.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';


@NgModule({
  declarations: [   
    QuizComponent  
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AccordionModule,
    FormsModule
  ],
  exports:[
    QuizComponent
  ]
})
export class AjquizModule { }
