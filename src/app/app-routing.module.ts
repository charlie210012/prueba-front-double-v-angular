import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchUsersComponent } from './user/search-users.component';
import { UserDetailsComponent } from './user/user-details.component';

const routes: Routes = [
  { path: '', component: SearchUsersComponent },
  { path: 'user/:username', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
