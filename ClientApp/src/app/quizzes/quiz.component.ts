import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ApiService } from '../api.service'

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {

  quiz = {} as any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz)    
  }

  }

