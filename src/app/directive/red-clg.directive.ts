import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appRedClg]'
})
export class RedClgDirective {

  constructor(el : ElementRef) {
    el.nativeElement.style.color = "pink";
    el.nativeElement.style.backgroundColor = "black";
   }

}
