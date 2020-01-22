import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { UsersComponent } from './components/users/users.component';
// import { UserDetailsComponent } from './components/user-details/user-details.component';
import { GlobalService } from './services/global.service';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


const routes: Routes = [

  GlobalService.childRoutes([
    { 
      path: 'users', 
      loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule) 
    },
    { 
      path: 'user-details/:id', 
      loadChildren: () => import('./components/user-details/user-details.module').then(m => m.UserDetailsModule)  
    },
    { 
      path: 'posts/:name/:id', 
      loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule)  
    },
    { path: '', redirectTo: '/users', pathMatch: 'full' }
  ])
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
