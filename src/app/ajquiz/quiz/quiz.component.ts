import { Component, OnInit, ViewChild } from '@angular/core';

import { QuestionClass } from './question-class';
import { ToastrService } from 'ngx-toastr';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  isQuestionCardShow: boolean = false;
	totalAnswered: number = 0;
	rightAnswer!: number;
	questionObj = new QuestionClass();
	@ViewChild('submitModal')
	submitModal!: ModalDirective;
	@ViewChild('addQuestionModal')
	addQuestionModal!: ModalDirective;
	@ViewChild('answerModal')
	answerModal!: ModalDirective;
	@ViewChild('questionForm') questionForm: any;
	@ViewChild('questionTest') questionTest : any;

	constructor( private toastr: ToastrService) { }

	answerArray = [];

	allQuestions: any = [{
		"id": 1,
		"question": "Vad heter Belgiens huvudstad?",
		"a": "Wien",
		"b": "Berlin",
		"c": "Bryssel",
		"d": "Prag",
		"answer": "c"
	},
	{
		"id": 2,
		"question": "Vad heter Australiens huvudstad?",
		"a": "Wien",
		"b": "Camberra",
		"c": "Bryssel",
		"d": "Prag",
		"answer": "b"
	},
	{
		"id": 3,
		"question": "Vad heter Bulgariens huvudstad?",
		"a": "Wien",
		"b": "Sofia",
		"c": "Bryssel",
		"d": "Prag",
		"answer": "b"
	}
	];

	/**Method call on submit the test */
	submitTest() {
		this.rightAnswer = 0;
		this.totalAnswered = 0;
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i] && (this.allQuestions[i]["selected"] != null)) {
				this.totalAnswered++;
				if (this.allQuestions[i]["selected"] == this.allQuestions[i]["answer"]) {
					this.rightAnswer++;
				}
			}

		}
		this.submitModal.show();

	}

	startQuiz() {
		for (let i = 0; i < this.allQuestions.length; i++) {
			if ("selected" in this.allQuestions[i]) {
				delete this.allQuestions[i]["selected"];
			}

		}
		this.questionTest.reset();
		this.isQuestionCardShow = true;

	}
	HomePage() {
		this.isQuestionCardShow = false;
	}
	addQuestion(){
		this.addQuestionModal.show();
	}
	submitAddQuestion(){
		let quesTemp = JSON.parse(JSON.stringify(this.questionObj));
		quesTemp["id"] = this.allQuestions.length+1;
		this.allQuestions.push(quesTemp);
		this.questionForm.reset();
		this.toastr.success("Du har lagt till frågan!");
		this.addQuestionModal.hide();

	}
	checkAnswers(){
		this.submitModal.hide();
		this.answerModal.show();
	}

	ngOnInit() {



	}

}
