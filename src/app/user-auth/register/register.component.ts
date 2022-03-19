import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : string = '';
  email : string ='';
  password : string = '';


  constructor( private auth : AuthService) { }

  ngOnInit(): void {
  }

  register(){
    if(this.user == ''){
      alert('Please enter user name');
      return;
    }
    if(this.email == ''){
      alert('Please enter email');
      return;
    }
    if(this.password == ''){
      alert('Please enter password');
      return;
    }

    this.auth.register( this.email,this.password);
    this.user = '';
    this.email = '';
    this.password = '';
  }

}
