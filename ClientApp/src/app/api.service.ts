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
  }

  getQuizzes() {
    return this.http.get(`/api/quizzes`);
  }

  getAllQuizzes() {
    return this.http.get(`/api/quizzes/all`);
  }
  postQuestion(question) {
    this.http.post(`/api/questions`, question).subscribe(res => {
      console.log(res);
    });

  }

  putQuestion(question) {
    this.http.put(`/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res);
    });
  }

  postQuiz(quiz) {
    this.http.post(`/api/quizzes`, quiz).subscribe(res => {
      console.log(res);
    });
  }

  putQuiz(quiz) {
    this.http.put(`/api/quizzes/${quiz.id}`, quiz).subscribe(res => {
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
