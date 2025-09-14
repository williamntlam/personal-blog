import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-posts-page',
  imports: [],
  templateUrl: './blog-posts-page.html',
  styleUrl: './blog-posts-page.css'
})
export class BlogPostsPage {

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
