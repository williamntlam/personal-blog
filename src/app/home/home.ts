import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, AboutMeComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  protected isDarkMode = true;
  protected showAboutMe = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Set dark mode by default (only in browser)
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (typeof document !== 'undefined') {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }

  openAboutMe() {
    this.showAboutMe = true;
  }

  closeAboutMe() {
    this.showAboutMe = false;
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }
}
