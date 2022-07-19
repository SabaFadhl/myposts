import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:Post[]=[];
  postService;
  constructor() {
    this.postService= new PostService();
    // this.posts=this.postService.getPosts();
  }
  getPosts(){
    return this.posts=this.postService.getPosts();
  }

  ngOnInit(): void {
  }

}
