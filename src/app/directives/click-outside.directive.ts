import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document: click', ['$event', '$event.target']) onClick(event: Event, targetEl: HTMLElement) {
    const clickedEl = this.elementRef.nativeElement.contains(targetEl);
    if(!clickedEl){
      this.clickOutside.emit(event);
    }
  }
}