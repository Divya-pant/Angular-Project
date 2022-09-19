import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { PostComponent } from './admin/dashboard/post/post.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { HomeComponent } from './admin/home/home.component';

const routes: Routes = [
  {
    path:'' ,component:HomeComponent,
    children:[
      {
        path:'dashboard', component:DashboardComponent
      },
      {
        path:'post', component:PostComponent
      },
      {
        path:'comments', component:CommentsComponent
      },
      {
        path:'pages', component:PagesComponent
      },
      {
        path:'settings', component:SettingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }