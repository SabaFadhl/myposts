import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostJson } from '../models/PostJson';

type PostInfo={id:number,userId:number,title:string,body:string};
@Component({
  selector: 'app-extrajson',
  templateUrl: './extrajson.component.html',
  styleUrls: ['./extrajson.component.css']
})
export class ExtrajsonComponent implements OnInit {

  posts:any;
  constructor(http:HttpClient) {
    const postss:Observable<PostJson>=http.get<PostJson>('/assets/posts.json');
    postss.subscribe(post=>{
      this.posts=post;
      console.log(this.posts);
    })
   }

  ngOnInit(): void {
  }


}
