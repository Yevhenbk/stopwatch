import { Component } from '@angular/core';
import { faPlay, faPause, faRotateLeft, faHand, 
  IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { fromEvent, Observable } from 'rxjs';
import { bufferTime, take } from 'rxjs/operators';

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

  ss: any = '0' + 0;
  mm: any = '0' + 0;
  startTimer: ReturnType<typeof setTimeout>;
  running: boolean = false;

  start(): void {
    if(!this.running) {
      this.running = true;
      this.startTimer = setInterval(() => {
        this.ss++;
        this.ss = this.ss < 10 ? '0' + this.ss : this.ss;  

        if(this.ss === 60) {
          this.mm++;
          this.mm = this.mm < 10 ? '0' + this.mm : this.mm; 
          this.ss = '0' + 0;
        }
      }, 1000);
    } else {
      this.stop();
    }
  }

  stop(): void {
    clearInterval(this.startTimer);
    this.running = false;
  }

  reset(): void {
    if(this.running) {
      this.mm = this.ss = '0' + 0;
    } else {
      this.mm = this.ss = '0' + 0;
      this.start();
    }
  }

  ngOnInit(): void {
    this.doubleClick$ = fromEvent(document, 'dblclick')
    .pipe(bufferTime(500), take(1));
  }

  wait(): void {
    this.doubleClick$.subscribe(() => {
      this.start()
    });
  }
}
