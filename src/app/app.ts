import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Signal } from "./features/samples/signal/signal";
import { Lifecycle } from "./features/samples/hooks/lifecycle";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Signal, Lifecycle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Jefferson\'s Real Estate';
}
