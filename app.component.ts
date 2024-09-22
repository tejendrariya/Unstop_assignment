import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
// Seat reservation data
seats = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  // ... other rows
  [73, 74, 75, 76, 77, 78, 79],
  [80] // Last row with 3 seats
];
bookedSeats = [];

// Function to find available seats
findAvailableSeats() {
  const availableSeats = [];
  for (let i = 0; i < this.seats.length; i++) {
    for (let j = 0; j < this.seats[i].length; j++) {
      if (!this.bookedSeats.includes(this.seats[i][j])) {
        availableSeats.push(this.seats[i][j]);
      }
    }
  }
  return availableSeats;
}

// Function to book seats
bookSeats(numSeats) {
  const availableSeats = this.findAvailableSeats();
  const bookedSeats = [];

  // Implement logic to prioritize contiguous seats and minimize gaps
  // (Consider using a more efficient algorithm for large-scale applications)

  for (let i = 0; i < numSeats; i++) {
    if (availableSeats.length === 0) {
      return 'No seats available';
    }
    const bookedSeat = availableSeats.shift();
    bookedSeats.push(bookedSeat);
    this.bookedSeats.push(bookedSeat);
  }

  return bookedSeats;
}
}
