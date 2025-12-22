import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer-component/footer-component";
import { NavBarComponent } from "./components/nav-bar-component/nav-bar-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, NavBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MarcillaVivaWebApp');
}
