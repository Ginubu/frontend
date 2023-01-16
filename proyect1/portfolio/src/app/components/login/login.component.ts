import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group(
      {
        mail:['',[Validators.required,Validators.email]],
        usuario:['',[Validators.required]],
        password:['',[Validators.required,Validators.minLength(8)]]

      }
    )
  }

  ngOnInit(): void {
  }

  get mail(){
      return this.form.get('mail');
    }
  get pasw(){
    return this.form.get('password');
  }
  

}
