import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // ✅ Ensures service is globally available
})
export class ApiDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // constructor(private http: HttpClient) {}  // ✅ Inject HttpClient properly

  // getPosts(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);  // ✅ API call
  // }
}
