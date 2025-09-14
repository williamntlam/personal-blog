import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogDataService, BlogPost } from '../services/blog-data';

@Component({
  selector: 'app-blog-posts-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-posts-page.html',
  styleUrl: './blog-posts-page.css'
})
export class BlogPostsPage implements OnInit {
  posts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  searchQuery: string = '';
  showAllPosts: boolean = false;

  constructor(
    private router: Router,
    private blogDataService: BlogDataService
  ) {}

  ngOnInit() {
    this.categories = this.blogDataService.getCategories();
    this.loadPosts();
  }

  loadPosts() {
    this.posts = this.blogDataService.getAllPosts();
    this.filteredPosts = this.showAllPosts ? this.posts : this.posts.slice(0, 6);
    this.applyFilters();
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.posts];

    // Filter by category
    if (this.selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === this.selectedCategory);
    }

    // Filter by search query
    if (this.searchQuery.trim()) {
      filtered = this.blogDataService.searchPosts(this.searchQuery);
      if (this.selectedCategory !== 'All') {
        filtered = filtered.filter(post => post.category === this.selectedCategory);
      }
    }

    this.filteredPosts = this.showAllPosts ? filtered : filtered.slice(0, 6);
  }

  toggleShowAll() {
    this.showAllPosts = !this.showAllPosts;
    this.loadPosts();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  viewPost(postId: number) {
    this.router.navigate(['/blog', postId]);
  }
}
