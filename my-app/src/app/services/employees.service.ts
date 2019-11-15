import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Config } from 'protractor/built/config';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private apiUrl = 'http://5dcdf7cfd795470014e4d473.mockapi.io/Employee';

  constructor(private http: HttpClient) { }

  GetList(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.apiUrl, { observe: 'response' });
  }
}
