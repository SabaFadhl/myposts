import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string='';
  email:string='';
  send():void{
    console.log(this.name+" "+this.email)
    console.log(Number(this.name)+Number(this.email))
  }

}
