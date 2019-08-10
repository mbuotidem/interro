import { Component } from '@angular/core';
import { QuestionComponent } from '../questions/question.component';

@Component({
  selector: 'app-home',
  //templateUrl: './home.component.html',
  template:'<quiz></quiz><quizzes></quizzes>'
})
export class HomeComponent {
}
