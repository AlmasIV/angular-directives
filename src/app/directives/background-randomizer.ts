import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundRandomizer]'
})
export class BackgroundRandomizer {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('click')
  public onClick(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', `rgb(${this.getRandomRGBValue()}, ${this.getRandomRGBValue()}, ${this.getRandomRGBValue()})`);
  }
  private getRandomRGBValue() {
    return Math.floor(Math.random() * (256));
  }
}
