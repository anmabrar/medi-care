import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Doctor } from 'src/app/model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor( private fireStore : AngularFirestore) { }

  //add doctor
  addDoctor(doctor : Doctor){
    doctor.id = this.fireStore.createId();
    return this.fireStore.collection('/doctors').add(doctor);
  }

  // get all doctors
  getAllDoctors(){
    return this.fireStore.collection('/doctors').snapshotChanges();
  }

  //delete doctor
  deleteDoctor( doctor : Doctor){
    return this.fireStore.doc('/doctors'+doctor.id).delete();
  }

  // update doctor
  updateDoctor(doctor : Doctor){
    this.deleteDoctor(doctor);
    this.addDoctor(doctor);
  }
}
