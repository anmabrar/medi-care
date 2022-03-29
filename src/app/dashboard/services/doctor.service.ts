import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  Firestore,
  setDoc
} from '@angular/fire/firestore';

import { Doctor } from 'src/app/model/doctor';


@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  
  doctorCollectionRef = collection(this.firestore, 'doctors');
  

  constructor( private firestore : Firestore) { }

  addDoctor(doctor : Doctor){
    return addDoc(this.doctorCollectionRef,doctor);
  }

  deleteDoctor(doctor  : Doctor){
    const doctorRef = doc(this.firestore,`doctors/${doctor.id}`);
    return deleteDoc(doctorRef);
  }

  updateDoctor(doctor : Doctor){
    const doctorDocRef = doc(this.firestore,`doctors/${doctor.id}`);
    return setDoc(doctorDocRef,doctor);
  }



}
