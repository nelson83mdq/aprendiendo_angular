import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoJuegosComponent } from './video-juegos/video-juegos.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { OopsErrorComponent } from './oops-error/oops-error.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoJuegosComponent,
    HomeComponent,
    LibraryComponent,
    OopsErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
