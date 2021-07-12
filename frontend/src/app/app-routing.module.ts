import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomecontentComponent } from "./components/homecontent/homecontent.component";

import { HomePageComponent } from "./pages/public/home-page/home-page.component";
import { LoginPageComponent } from "./pages/public/login-page/login-page.component";
import { RegisterPageComponent } from "./pages/public/register-page/register-page.component";
import { CreatePostComponent } from "./pages/public/create-post/create-post.component";
import { PostsComponent } from "./pages/public/posts/posts.component";

const routes: Routes = [
  
  {
    path: '',
    component: HomePageComponent,
    children:[
      {path:"",component:HomecontentComponent},
      {path:"login", component:LoginPageComponent},
      {path:"register", component:RegisterPageComponent},
      {path:"create-post",component:CreatePostComponent},
      {path:"posts",component:PostsComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
