import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from "./features/samples/signal/signal";

@Component({
  selector: 'app-root',
  imports: [Signal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Jefferson\'s Real Estate';
}
