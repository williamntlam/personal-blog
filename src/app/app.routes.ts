import { Routes } from '@angular/router';
import { Home } from './home/home';
import { BlogPostsPage } from './blog-posts-page/blog-posts-page';
import { BlogPostComponent } from './blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'blog', component: BlogPostsPage },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: '**', redirectTo: '' }
];
