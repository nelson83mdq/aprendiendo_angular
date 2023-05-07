import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//------------------------------------------------------
import { VideoJuegosComponent } from './video-juegos/video-juegos.component';
import { LibraryComponent } from './library/library.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  {path: 'videojuegos', component: VideoJuegosComponent},
  {path: '', component: HomeComponent},
  {path: 'library', component: LibraryComponent},
  {path: '**', component: HomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
