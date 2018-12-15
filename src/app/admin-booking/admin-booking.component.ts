import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { Booking } from '../models/Booking';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {

  bookings:Booking[];

  constructor(
    public bookingService:BookingService
  ) { }

  ngOnInit() {
    this.bookingService.getBookings().subscribe(bookings => {
      this.bookings = bookings;
      console.log(this.bookings);
    });
  }

}
