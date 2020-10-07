import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User} from '../models/user'
import {LoginService} from '../services/login.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user:User;
  myForm: FormGroup;
  
  registerForm: FormGroup;
  submitted = false;
  loading = false;
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {

    
    this.myForm=this.fb.group({
      id: '',
      name: "",
      username: "",
      email: "",
      password: "",
      street:'',
      suite:'',
      city:'',
      zipcode:'',
      lat: '',
      lng: '',
      phone: "",
      website: "",
      cname: "",
      ccatchPhrase: "",
      cbs: ""
    })
    
  }
 


  submit(){
    this.user={
    name: this.myForm.controls['name'].value,
    username: this.myForm.controls['username'].value,
    email: this.myForm.controls['email'].value,
    password: this.myForm.controls['password'].value,
    address: {
    street: this.myForm.controls['street'].value,
    suite: this.myForm.controls['suite'].value,
    city: this.myForm.controls['city'].value,
    zipcode: this.myForm.controls['zipcode'].value,
    geo: {
    lat: this.myForm.controls['lat'].value,
    lng: this.myForm.controls['lng'].value
    }
    },
    phone: this.myForm.controls['phone'].value,
    website: this.myForm.controls['website'].value,
    company: {
    name: this.myForm.controls['cname'].value,
    catchPhrase: this.myForm.controls['ccatchPhrase'].value,
    bs: this.myForm.controls['cbs'].value
    },
    id: this.myForm.controls['id'].value}
    
  
    
    this.loginService.register(this.user).subscribe(
      res=>{
        this.user = res
      }
    )
  }

}

