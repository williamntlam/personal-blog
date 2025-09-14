import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BlogPostsPage } from './blog-posts-page/blog-posts-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: BlogPostsPage },
  { path: '**', redirectTo: '' }
];
