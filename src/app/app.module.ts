import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import { ContactsComponent } from './contacts/contacts.component';

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'blog', component:BlogComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'destinations', component:DestinationsComponent},
  {path:'gallery', component:GalleryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DestinationsComponent,
    GalleryComponent,
    BlogComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
