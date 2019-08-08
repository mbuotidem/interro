import { Component, OnInit } from '@angular/core';
//import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../api.service'

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
})
export class QuestionsComponent implements OnInit{
  
  question = {}
  questions

  constructor(private api:ApiService){}

  ngOnInit(){
      this.api.getQuestions().subscribe(res => {
          this.questions = res
      })
  }

  post(question) {
    this.api.postQuestion(question);
  }

}
