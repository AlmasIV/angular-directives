import { Directive, HostListener, output, OutputEmitterRef } from '@angular/core';

@Directive({
  selector: '[appClickCount]'
})
export class ClickCount {
  public onCountNumberOutput: OutputEmitterRef<number> = output<number>();
  private totalCounts: number = 0;
  @HostListener("click")
  public count(): void {
    this.totalCounts++;
    this.onCountNumberOutput.emit(this.totalCounts);
  }
}
