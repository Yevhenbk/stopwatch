import { Component } from '@angular/core';
import { faStroopwafel, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {
  faStroopwafel: IconDefinition = faStroopwafel;

  start(): void {
     return console.log('start')
  }

  stop(): void {
    console.log('stop')
  }

  reset(): void {
    console.log('reset')
  }
}
