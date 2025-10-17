import { Component } from '@angular/core';
import { Fichapersonaje } from '../fichapersonaje/fichapersonaje';
import { Personaje } from '../../models/personaje.models';

@Component({
  selector: 'app-listapersonajes',
  imports: [Fichapersonaje],
  templateUrl: './listapersonajes.html',
  styleUrl: './listapersonajes.css'
})


export class Listapersonajes {

    Personajes:Personaje[]= [
      new Personaje('Ikit Claw', 'Skaven', 3, 'https://2d4chan.org/mediawiki/thumb.php?f=Warhammer_Ikit_Claw.jpg&width=300'),
      new Personaje('Be´lakor', 'Demonio del caos' , 5 , 'https://images.steamusercontent.com/ugc/2005826097668935712/6C11555214A593596EA5C77AF60B2CC46831E432/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'),
      new Personaje('Kairos Fateweaver', 'Demonio de Tzeentch' , 5 , 'https://i.pinimg.com/736x/d3/15/ac/d315ac14be13079064026bbfb45686c6.jpg'),
      new Personaje('Golgfag Maneater', 'Ogro' , 4 , 'https://cdn.sega.co.uk/mhc-tw/public/content/media/images/raster/whiii-omens-of-destruction-wh3_ood_dlc_golgfag_web_bg_3840x2160.jpg'),
      new Personaje('Luthor Harkon', 'Vampiro' , 3 , 'https://pbs.twimg.com/amplify_video_thumb/1049656623181033472/img/7Bz0hbcamzPR5rbl.jpg'),
    ]
}
    
