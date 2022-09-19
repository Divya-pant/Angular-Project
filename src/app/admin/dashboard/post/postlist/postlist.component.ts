import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit , OnDestroy{
  posts: post[] =[]
  private postSub: Subscription; 
// posts=[
//   {title:'Angular Project', content:'This is my Angular Project'},
//   {title:'Angular 14 Project', content:'This is my first Angular-14 Project'},
//   {title:'Dot Net Project', content:'This is my Dot Net Project'},
//   {title:'Full Stack Project', content:'This is my full stack Project'}
// ]
  constructor(public ps:PostService) { }

  ngOnInit(): void {
    this.posts= this.ps.getAll();
    this.postSub= this.ps.getUpdateListener().subscribe((posts:post[])=>{
      this.posts= posts;
    })
  }
 ngOnDestroy(){
 this.postSub.unsubscribe();
  }
  
}