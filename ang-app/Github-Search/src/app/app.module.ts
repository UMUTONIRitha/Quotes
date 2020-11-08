import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserSearchFormComponent } from './user-search-form/user-search-form.component';
import { HighlightDirective } from './highlight.directive';
import { RepositoryComponent } from './repository/repository.component';
import { AboutGithubComponent } from './about-github/about-github.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserSearchFormComponent,
    HighlightDirective,
    RepositoryComponent,
    AboutGithubComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
