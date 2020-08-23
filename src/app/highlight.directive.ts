import { Directive,ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.backgroundColor='rgb(144,238,144)';
  }
  
}
