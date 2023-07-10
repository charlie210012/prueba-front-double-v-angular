import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { SearchUsersComponent } from './user/search-users.component';
import { AlertComponent } from './utils/alert.component';
import { UserDetailsComponent } from './user/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchUsersComponent,
    AlertComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: SearchUsersComponent },
      { path: 'user/:username', component: UserDetailsComponent },
    ]),
    FormsModule, // Agrega FormsModule al arreglo de imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
