import { Component } from '@angular/core';
//import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../api.service'

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent {
  
  question = {}

  constructor(private api:ApiService){}

  post(question) {
    this.api.postQuestion(question);
  }

}
