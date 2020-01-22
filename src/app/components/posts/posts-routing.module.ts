import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  GlobalService.childRoutes([
    {
      path: '',
      children: [
        { path: 'posts/:name/:id', component: PostsComponent, data: { type: 'post' } },
      ],
      data: { title: 'Posts' }
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
