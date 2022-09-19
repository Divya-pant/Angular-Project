import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from './postlist/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private ps:PostService) { }

  ngOnInit(): void {
  }
  onPostData(forms:NgForm){
    if(!forms.invalid){
    this.ps.addPost(forms.value.title, forms.value.content, forms.value.dateTime)
  }
  else{
return
  }
}
}
