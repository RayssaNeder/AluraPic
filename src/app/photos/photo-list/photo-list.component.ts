import { PhotoService } from './../photo/photo.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

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
