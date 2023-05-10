import { Component } from '@angular/core';
import { VideoJuego } from './videoJuegos';

@Component({
  selector: 'app-video-juegos',
  templateUrl: './video-juegos.component.html',
  styleUrls: ['./video-juegos.component.css']
})
export class VideoJuegosComponent {
  public videoJuegosList: Array<VideoJuego>;
  public value: string = ''; // valor del input

  constructor(){
    this.videoJuegosList = [
      new VideoJuego('Street Fighter', 1988, 'SNES',3, true),
      new VideoJuego('TMNT', 1989, 'Konami',6, true),
      new VideoJuego('Space Quest', 1990, 'Sierra',9, false),
      new VideoJuego('BattleToads', 1991, 'Rare',3, true)
    ]
  }

  deleteRow(i_randomParam: number){
    this.videoJuegosList.splice(i_randomParam,1);
  }

  something(): void{
    alert(this.value);
  }

}
