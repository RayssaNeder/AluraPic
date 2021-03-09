import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent{
  @Input() description = '';  //Inbound properties: aceitam valores passados por outros componentes. São decoradas com @Input
  @Input() url = '';          //Inbound properties: aceitam valores passados por outros componentes. São decoradas com @Input
}
