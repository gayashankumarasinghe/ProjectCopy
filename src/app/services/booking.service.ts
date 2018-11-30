import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Booking } from '../models/Booking';

@Injectable()
export class BookingService {
  Bookings: FirebaseListObservable<any[]>;
  Booking: FirebaseObjectObservable<any>;

  constructor(
    public af: AngularFireDatabase
  ) {
    //get bookings as list this call the booking collection path is for booking collection
    this.Bookings = this.af.list('/bookings') as FirebaseListObservable<Booking[]>;
    }
    
     //get booking
  //getBooking(vehicleno : string): FirebaseObjectObservable<any> {
   //  return this.Booking = this.af.database.object('/bookings/'+ vehicleno);
  //}
  newBooking(booking:Booking){
    this.Bookings.push(this.Booking);
  }

}
