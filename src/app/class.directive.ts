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
  @Input('appClass') set classNames(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.element.nativeElement.classlist.add(key);
      } else {
        this.element.nativeElement.classlist.remove(key);
      }
    }
  }
}
