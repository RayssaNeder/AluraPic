import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadButtonComponent } from './photo-list/load-button/load-button.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotosComponent } from './photo-list/photos/photos.component';

@NgModule({
  declarations: [ PhotoComponent, PhotoListComponent, PhotosComponent, FilterByDescription, LoadButtonComponent ],
  exports: [  ],
  imports: [ HttpClientModule,  //Esse é o HttpCleint provider. É necessário para que o Angular consiga realizar a injeção de dependência do HTTPClient app.component.ts
              CommonModule]

})
export class PhotosModule {}
