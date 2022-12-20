import { Component } from '@angular/core';
import { faPlay, faPause, faRotateLeft, faHand, 
  IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {
  faPlay: IconDefinition = faPlay;
  faPause: IconDefinition = faPause;
  faRotateLeft: IconDefinition = faRotateLeft;
  faHand: IconDefinition = faHand;

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
