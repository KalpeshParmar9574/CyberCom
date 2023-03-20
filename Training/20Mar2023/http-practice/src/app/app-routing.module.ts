import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch:'full',
    redirectTo: 'users'
    
  },
  {
    path: 'users',
    component:UsersComponent
  },
  {
    path: 'users/add-user',
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
