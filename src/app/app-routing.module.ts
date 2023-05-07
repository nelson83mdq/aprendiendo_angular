import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//------------------------------------------------------
import { VideoJuegosComponent } from './video-juegos/video-juegos.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';
import { OopsErrorComponent } from './oops-error/oops-error.component';

const routes: Routes = [  
  {path: 'videojuegos', component: VideoJuegosComponent},
  {path: 'home', component: HomeComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'library/:someBook', component: LibraryComponent},
  {path: '**', component: OopsErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
