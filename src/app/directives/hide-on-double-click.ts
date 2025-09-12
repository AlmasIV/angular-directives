import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideOnDoubleClick]'
})
export class HideOnDoubleClick {
  private isHidden: boolean = false;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  @HostListener("dblclick")
  public hide(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, "opacity", !this.isHidden ? "0" : "1");
    this.isHidden = !this.isHidden;
  }
}
