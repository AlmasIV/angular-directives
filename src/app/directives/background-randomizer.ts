import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundRandomizer]'
})
export class BackgroundRandomizer {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  @HostListener('click')
  public onClick(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', `rgb(${this.getRandomByte()}, ${this.getRandomByte()}, ${this.getRandomByte()})`);
  }
  private getRandomByte() {
    return Math.floor(Math.random() * 256);
  }
}
