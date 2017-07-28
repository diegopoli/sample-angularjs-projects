import {
  Directive, 
  OnInit, 
  ElementRef, 
  Renderer2, 
  HostListener, 
  HostBinding, 
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultBackgroundColor: string = 'transparent';
  @Input() defaultHighlightedBackgroundColor: string = 'blue';
  @Input() defaultColor: string = 'black';
  @Input() defaultHighlightedColor: string = 'white';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // This directive does not access the DOM directly, instead, it uses Renderer along with ElementRef.
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    //this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    // New approach (using HostBinding)
    this.backgroundColor = this.defaultHighlightedBackgroundColor;
    this.color = this.defaultHighlightedColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');

    // New approach (using HostBinding)
    this.backgroundColor = this.defaultBackgroundColor;
    this.color = this.defaultColor;
  }
}
