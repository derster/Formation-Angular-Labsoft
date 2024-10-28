import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExponentialStrengthPipe } from 'utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExponentialStrengthPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bo';
}
