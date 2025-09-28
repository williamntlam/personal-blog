import { Injectable } from '@angular/core';
import blogPostsData from '../data/blog-posts.json';
import blogContentData from '../data/blog-content.json';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
  contentId?: string;
  content?: string;
}

export interface BlogData {
  posts: BlogPost[];
  categories: string[];
}

export interface BlogContent {
  content: { [key: string]: string };
}

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  private data: BlogData = blogPostsData;
  private contentData: BlogContent = blogContentData;

  constructor() { }

  getAllPosts(): BlogPost[] {
    return this.data.posts;
  }

  getFeaturedPosts(): BlogPost[] {
    return this.data.posts.filter(post => post.featured);
  }

  getPostsByCategory(category: string): BlogPost[] {
    return this.data.posts.filter(post => post.category === category);
  }

  getPostById(id: number): BlogPost | undefined {
    const post = this.data.posts.find(post => post.id === id);
    if (post && post.contentId) {
      post.content = this.contentData.content[post.contentId];
    }
    return post;
  }

  getCategories(): string[] {
    return this.data.categories;
  }

  searchPosts(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase();
    return this.data.posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
  }

  getPostsByTag(tag: string): BlogPost[] {
    return this.data.posts.filter(post => 
      post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
  }

  getRecentPosts(limit: number = 6): BlogPost[] {
    return this.data.posts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, limit);
  }

  getContentById(contentId: string): string | undefined {
    return this.contentData.content[contentId];
  }
}
