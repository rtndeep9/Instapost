import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomePageComponent } from "./pages/public/home-page/home-page.component";
import { LoginPageComponent } from './pages/public/login-page/login-page.component';
import { AlertComponent } from './components/alert/alert.component';
import { RegisterPageComponent } from './pages/public/register-page/register-page.component';
import { CreatePostComponent } from './pages/public/create-post/create-post.component';
import { PostsComponent } from './pages/public/posts/posts.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomePageComponent, LoginPageComponent, AlertComponent, RegisterPageComponent, HomecontentComponent, CreatePostComponent, PostsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, NgbModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
