import { Component, signal, WritableSignal } from '@angular/core';
import { Box } from "./box/box";
import { BackgroundRandomizer } from "./directives/background-randomizer";
import { HideOnDoubleClick } from "./directives/hide-on-double-click";
import { ClickCount } from "./directives/click-count";

@Component({
  selector: 'app-root',
  imports: [Box, BackgroundRandomizer, HideOnDoubleClick, ClickCount],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public totalCount: WritableSignal<number> = signal(0);
  public onCount(count: number): void {
    this.totalCount.set(count);
  }
}
