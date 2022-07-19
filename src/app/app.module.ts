import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './posts/create/create.component';
import { ShowComponent } from './posts/show/show.component';
import { DetailsComponent } from './posts/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent,
    HomeComponent,
    CreateComponent,
    ShowComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
