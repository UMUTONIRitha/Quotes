import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AboutGithubComponent } from './about-github/about-github.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'about-github', component:AboutGithubComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
