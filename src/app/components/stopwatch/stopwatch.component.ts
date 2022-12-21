import { Component } from '@angular/core';
import { faPlay, faPause, faRotateLeft, faHand, 
  IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, Observable, interval } from 'rxjs';
import { bufferTime, debounceTime, take } from 'rxjs/operators';

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
  doubleClick$: Observable<Event[]>;

  ms: any = '0' + 0;
  ss: any = '0' + 0;
  mm: any = '0' + 0;
  startTimer: ReturnType<typeof setTimeout>;
  running: boolean = false;

  start(): void {
    if(!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.ms++;
        this.ms = this.ms < 10 ? '0' + this.ms : this.ms;  

        if(this.ms === 100) {
          this.ss++;
          this.ss = this.ss < 10 ? '0' + this.ss : this.ss; 
          this.ms = '0' + 0;
        }

        if(this.ss === 60) {
          this.mm++;
          this.mm = this.mm < 10 ? '0' + this.mm : this.mm; 
          this.ss = '0' + 0;
        }
      }, 10);
    } else {
      this.stop();
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void {
    this.mm = this.ss = this.ms = '0' + 0;
  }

  ngOnInit(): void {
    this.doubleClick$ = fromEvent(document, 'dblclick')
    .pipe(bufferTime(500), take(1))
  }

  onDoubleClick(): void {
    this.doubleClick$.subscribe(() => {
      this.start()
    });
  }
}
