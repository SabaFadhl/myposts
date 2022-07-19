import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Post } from './models/Post'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:Post[]=[];
  constructor() {
    this.getPosts();
   }

  getPosts(){
    this.posts=[
      new Post(1,"Lorem","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum","Saba Fadhl","Sana'a"),
      new Post(2,"Ipsum","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum","Rowan dalal","Taiz"),
      new Post(3,"Lsimplyorem","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum","OSama motwakkil","Ibb"),
      new Post(4,"dummy","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum","Ibraheem Morghim","Hajjah"),
      new Post(5,"text","Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum","Hisham shareef","Aden"),
    ]
    return this.posts;
  }
  getPostById(id:number){
    var result=this.posts.filter(obj=>{
      return obj.id === id
    })
    return result;
  }
}
