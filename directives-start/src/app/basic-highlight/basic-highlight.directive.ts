import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]' /* This selector shall be used as an attribute just because of the brackets [...]. */
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  	// This directive accesses the DOM directly.
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }
}