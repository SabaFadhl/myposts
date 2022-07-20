import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { GuardService } from './guard.service';
import { HomeComponent } from './home/home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { CreateComponent } from './posts/create/create.component';
import { DetailsComponent } from './posts/details/details.component';
import { PostsComponent } from './posts/posts.component';
import { ShowComponent } from './posts/show/show.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'place',
    component:PlaceholderComponent
  },
  {
    path:'register',
    component:RegisterComponent
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
      },
      {
        path:'details/:id',
        component:DetailsComponent
      }


    ]
  },
  {
    path:'admin',
    component:AdminComponent,canActivate:[GuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
