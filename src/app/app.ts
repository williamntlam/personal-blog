import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPosts } from './blog-posts/blog-posts';

@Component({
  selector: 'app-root',
  imports: [CommonModule, AboutMeComponent, BlogPosts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('personal-blog');
  protected isDarkMode = true;
  protected showAboutMe = false;

  ngOnInit() {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  openAboutMe() {
    this.showAboutMe = true;
  }

  closeAboutMe() {
    this.showAboutMe = false;
  }
}
