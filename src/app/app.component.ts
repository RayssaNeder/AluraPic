
import { Component, OnInit } from '@angular/core';
import { Photo } from './photos/photo/photo';
import { PhotoService } from './photos/photo/photo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title="Alurapic";
  description = 'leão';
  url

  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService){  //Injeção de dependência
    }

    //OnInit apos o constructor é uma convenção
  ngOnInit(): void{

    this.photoService.listFromUser('flavio')
    .subscribe(photos => this.photos = photos);

  }
}
