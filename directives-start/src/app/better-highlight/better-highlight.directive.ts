import {
  Directive, 
  OnInit, 
  ElementRef, 
  Renderer2, 
  HostListener, 
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // This directive does not access the DOM directly, instead, it uses Renderer along with ElementRef.
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    // New approach (using HostBinding)
    this.backgroundColor = 'blue';
    this.color = 'white';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    // New approach (using HostBinding)
    this.backgroundColor = 'transparent';
    this.color = 'black';
  }
}
