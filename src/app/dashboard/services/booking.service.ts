import { Injectable } from '@angular/core';
import { 
  addDoc,
  collection,
  doc,
  deleteDoc,
  Firestore,
  setDoc
} from '@angular/fire/firestore';
import { Booking } from 'src/app/model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookingCollectionRef = collection(this.firestore,'booking');

  constructor( private firestore : Firestore) { }

  addBooking(booking :Booking){
    return addDoc(this.bookingCollectionRef,booking);
  }

  deleteBooking( booking : Booking){
    const bookingRef = doc(this.firestore,`booking/${booking.id}`);
    return deleteDoc(bookingRef);
  }

  updateBooking(booking : Booking){
    const bookingDocRef = doc(this.firestore,`booking/${booking.id}`);
    return setDoc(bookingDocRef,booking);
  }
}
