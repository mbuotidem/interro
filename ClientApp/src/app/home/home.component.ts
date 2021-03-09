import { Component } from '@angular/core';
import { AuthService } from '../register/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //template:'<quiz></quiz><quizzes></quizzes>'
})
export class HomeComponent {
  constructor(public auth: AuthService) { }
}
