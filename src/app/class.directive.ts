import {
  Directive,
  HostListener,
  Renderer2,
  ElementRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  @HostListener('mouseenter') onmouseenter() {
    this.renderer.addClass(this.element.nativeElement, 'highlight');
  }
  @HostListener('mouseleave') onmouseleave() {
    this.renderer.removeClass(this.element.nativeElement, 'highlight');
  }
  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
