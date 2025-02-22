import { Component, OnInit } from '@angular/core';
import { ApiDataService } from './services/api-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Must be standalone
  imports: [CommonModule],  // ✅ Required for template directives
  template: `
    <h2>JSON Placeholder Posts</h2>
    <button (click)="getApiData()">Fetch Posts</button>
    <ul>
      <li *ngFor="let post of posts">{{ post.title }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  posts: any[] = [];

  // constructor(private apiService: ApiDataService) {}  // ✅ Inject the service

  ngOnInit(): void {    
    console.log('sanjai santhosh!');
  }

  getApiData() {
    // this.apiService.getPosts().subscribe((data) => {  
    //   this.posts = data;  // ✅ Store API response
    //   console.log("API Response:", data);
    // });
  }
}
