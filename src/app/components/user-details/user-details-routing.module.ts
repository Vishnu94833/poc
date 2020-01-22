import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { UserDetailsComponent } from './user-details.component';


const routes: Routes = [
  GlobalService.childRoutes([
    { path: '',
    children: [
            { path: 'user-details/:id', component: UserDetailsComponent, data: { type: 'detail' } },
            // { path: 'delete/:id', component: EmployeeManagementComponent, data: { type: 'deleteMode' } }
          ], 
    data: { title: 'user-details' } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
