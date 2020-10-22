import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Post} from '../models/post'
import {GeneralService} from '../services/general.service'
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  post:Post;
  myForm: FormGroup;
  submitted = false;
  currentUserId: number;
  constructor(
    private fb: FormBuilder,
    private generalService: GeneralService
  ) { }

  ngOnInit(): void {
    this.currentUserId =  Number( ` ${JSON.parse(localStorage.getItem( 'token' )).userId}`);
    
    this.myForm=this.fb.group({
      userId: '',
      id: "",
      title: "",
      body: "",
    })
  }
 


  submit(){
    this.post={
      userId: this.currentUserId,
      id: this.myForm.controls['id'].value,
      title: this.myForm.controls['title'].value,
      body: this.myForm.controls['body'].value,
    }
    
     this.generalService.pushPost(this.post).subscribe(
       res=>{
         this.post = res
       }
     )
   

}
}
