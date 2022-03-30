import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { 
  addDoc,
  collection,
  doc,
  deleteDoc,
  Firestore,
  setDoc
} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentCollectionRef = collection( this.firestore,'appointments');

  constructor( private firestore : Firestore) { }

  addAppointment(appointment : Appointment){
    return addDoc( this.appointmentCollectionRef,appointment);
  }

  deleteAppointment(appointment : Appointment){
    const appointmentRef = doc(this.firestore,`appointments/${appointment.id}`);
    return deleteDoc(appointmentRef);
  }

  updateAppointment(appointment : Appointment){
    const appointmentDocRef = doc(this.firestore,`appointments/${appointment.id}`);
    return setDoc(appointmentDocRef,appointment);
  }
}
