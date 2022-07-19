import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './posts/create/create.component';
import { PostsComponent } from './posts/posts.component';
import { ShowComponent } from './posts/show/show.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'posts',
    children:[
      {
        path:'',
        component:PostsComponent
      },
      {
        path:'create',
        component:CreateComponent
      },
      {
        path:'show',
        component:ShowComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
