import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    HttpClientModule //Esse é o HttpCleint provider. É necessário para que o Angular consiga realizar a injeção de dependência do HTTPClient app.component.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
