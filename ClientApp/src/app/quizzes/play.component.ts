import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ApiService } from '../api.service'

@Component({
  selector: 'play',
  templateUrl: './play.component.html',
})
export class PlayComponent implements OnInit {

  quizzes

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllQuizzes().subscribe(res => {
      this.quizzes = res
    })
  }

}

