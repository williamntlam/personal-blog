import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogDataService, BlogPost } from '../services/blog-data';

@Component({
  selector: 'app-blog-post',
  imports: [CommonModule],
  templateUrl: './blog-post.component.html'
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | undefined;
  postId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogDataService: BlogDataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.postId = +id;
        this.post = this.blogDataService.getPostById(this.postId);
        
        if (!this.post) {
          // Post not found, redirect to blog page
          this.router.navigate(['/blog']);
        }
      }
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  goBack() {
    this.router.navigate(['/blog']);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
