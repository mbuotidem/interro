import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../api.service'

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {

  quiz = {}

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.quizSelected.subscribe(quiz => this.quiz = quiz)
    
  }

  }

