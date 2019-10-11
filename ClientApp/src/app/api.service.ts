import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable()
export class ApiService {
  baseUrl = environment.baseUrl;

  private selectedQuestion = new Subject<any>();
  questionSelected = this.selectedQuestion.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) { }

  getQuestions(quizId) {
    return this.http.get(`/api/questions/${quizId}`);
    //`${this.baseUrl}/api/questions/${quizId}`
    //`https://localhost:44353/api/questions/${quizId}`
  }

  getQuizzes() {
    return this.http.get(`/api/quizzes`);
    //`${this.baseUrl}/api/quizzes`
    //'https://localhost:44353/api/quizzes'
  }

  getAllQuizzes() {
    return this.http.get(`/api/quizzes/all`);
    //`${this.baseUrl}/api/quizzes/all`
    //'https://localhost:44353/api/quizzes/all'
  }
  postQuestion(question) {
    this.http.post(`/api/questions`, question).subscribe(res => {
      //`${this.baseUrl}/api/questions`
      //'https://localhost:44353/api/questions'
      console.log(res);
    });

  }

  putQuestion(question) {
    this.http.put(`/api/questions/${question.id}`, question).subscribe(res => {
//`${this.baseUrl}/api/questions/${question.id}`
//`https://localhost:44353/api/questions/${question.id}`
      console.log(res);
    });
  }

  postQuiz(quiz) {
    this.http.post(`/api/quizzes`, quiz).subscribe(res => {
      //`${this.baseUrl}/api/quizzes`
      //'https://localhost:44353/api/quizzes'
      console.log(res);
    });
  }

  putQuiz(quiz) {
    this.http.put(`/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
      //`${this.baseUrl}/api/quizzes/${quiz.id}`
      //`https://localhost:44353/api/quizzes/${quiz.id}`
      console.log(res);
    });
  }

  selectQuestion(question) {
    this.selectedQuestion.next(question);
  }



  selectQuiz(quiz) {
    this.selectedQuiz.next(quiz);
  }

}
