export class PostJson{
  id:number;
  userId:number;
  title:string;
  body:string;
  image:string;
  constructor( id:number,userId:number,title:string,body:string,image:string)
  {
    this.id=id;
    this.userId=userId;
    this.title=title;
    this.body=body;
    this.image=image;
  }
}

