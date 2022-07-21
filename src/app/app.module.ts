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
import { AdminComponent } from './admin/admin.component';
import { GuardService } from './guard.service';
import { PostService } from './post.service';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ExtrajsonComponent } from './extrajson/extrajson.component';
import { ExtraqrcodeComponent } from './extraqrcode/extraqrcode.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent,
    HomeComponent,
    CreateComponent,
    ShowComponent,
    DetailsComponent,
    AdminComponent,
    PlaceholderComponent,
    RegisterComponent,
    ExtrajsonComponent,
    ExtraqrcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule,
    HttpClientModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [GuardService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
