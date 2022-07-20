import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css']
})
export class PlaceholderComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getInfo();
  }
  public getInfo(){
    this.userService.getInfo().subscribe(
      (response)=>{
        console.log(response)
        this.users=response;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
