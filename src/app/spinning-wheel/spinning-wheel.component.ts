import { Component } from '@angular/core';

@Component({
  selector: 'app-spinning-wheel',
  // standalone: true,
  // imports: [],
  templateUrl: './spinning-wheel.component.html',
  styleUrl: './spinning-wheel.component.css'
})
export class SpinningWheelComponent {
  outcomes: string[] = ['Prize 1', 'Prize 2', 'Try Again', 'Bonus!'];
  result: string = '';

  spinWheel() {
    const index = Math.floor(Math.random() * this.outcomes.length);
    this.result = this.outcomes[index];
  }
}


