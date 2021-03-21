import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from 'rxjs';
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'ap-search',
  templateUrl: './search.component.html'
})
export class SearchComonent implements OnInit, OnDestroy {

  @Output() onTyping  = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();



    //OnInit apos o constructor é uma convenção
    ngOnInit(): void{
      this.debounce
      .pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter));

    }

      ngOnDestroy(): void {
        this.debounce.unsubscribe();
      }

}
