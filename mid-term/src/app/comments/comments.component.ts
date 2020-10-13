import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GeneralService}  from '../services/general.service'
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../models/comment'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comment[]=[];
  name: string;
  body: string;
  email: string;
  comment:Comment;
  constructor(
    private location: Location,
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getComments();
  }
  getComments(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.generalService.getCommentsofP(id)
      .subscribe(comments => this.comments = comments);
  }
  addComment(){
    this.comment={
      id:null,
      postId: Number(this.route.snapshot.paramMap.get('id')),
      name:this.name,
      email: this.email,
      body: this.body
    }
    this.generalService.addComment(this.comment).subscribe(
      res=>{
        this.comment = res
      }
    )
    
  }
}
