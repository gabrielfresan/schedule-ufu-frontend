import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Example methods for your API endpoints
  getSchedules(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/schedules`);
  }

  createSchedule(schedule: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/schedules`, schedule);
  }

  getGinasios(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/ginasios`);
  }

  authenticate(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/auth/login`, credentials);
  }
}