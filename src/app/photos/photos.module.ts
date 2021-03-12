import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  declarations: [ PhotoComponent, PhotoListComponent ],
  exports: [  ],
  imports: [ HttpClientModule,  //Esse é o HttpCleint provider. É necessário para que o Angular consiga realizar a injeção de dependência do HTTPClient app.component.ts
              CommonModule]

})
export class PhotosModule {}
