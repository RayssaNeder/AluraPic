import { CardModule } from './../../shared/components/card/card.module';
import { CommonModule } from '@angular/common';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosModule } from './../photos.module';
import { PhotoListComponent } from './photo-list.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FileReader ],

  imports: [
    CommonModule,
    PhotosComponent,
    CardModule
   ]
})
export class PhotoListModule {

}
