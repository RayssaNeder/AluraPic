import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
  declarations: [ PhotoComponent ],
  exports: [ PhotoComponent ],
  imports: [ HttpClientModule ] //Esse é o HttpCleint provider. É necessário para que o Angular consiga realizar a injeção de dependência do HTTPClient app.component.ts

})
export class PhotosModule {}
