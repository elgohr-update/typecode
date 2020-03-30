import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './blog/components/blog-page/blog-page.component';
import { HomeComponent } from './blog/components/home/home.component';
import { Page404Component } from './shared/components/page404/page404.component';
import { CyberPageComponent}  from './cybersecurity/components/cyber-page/cyber-page.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cybersecurity', component: CyberPageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
