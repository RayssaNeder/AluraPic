
import { Component } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title="Alurapic";
  description = 'leão';
  url

  photos: Photo[] = [];

  constructor(photoService: PhotoService){  //Injeção de dependência
   photoService.listFromUser('flavio')
   .subscribe(photos => this.photos = photos);

  }
}
