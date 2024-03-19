import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConversorPipe } from './pipes/conversor.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConversorPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercicioPipe';
}
