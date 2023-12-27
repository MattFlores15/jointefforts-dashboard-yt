// survey.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyService {
  private apiUrl = 'https://api.example.com/survey-results'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getSurveyResults(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
