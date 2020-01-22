import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { PostsModel } from 'src/app/models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  private postData: Array<PostsModel> = new Array<PostsModel>();
  constructor(private postService:PostService,private route:Router) { }

  ngOnInit() {
    this.getPostsById();
  }

  getPostsById(){
    let id =   parseInt((this.route.url).split('/')[3])
    this.postService.getPosts(id).subscribe((res:any)=>{
      this.postData = this.postService.getPostsById(res)
    })
  }

}
