import { Injectable } from '@angular/core';
import {
  addDoc,
  Firestore,
  collection,
  collectionData,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';

import { Doctor } from 'src/app/model/doctor';


@Injectable({
  providedIn: 'root'
})

export class DoctorService {

  public doctors : any = [];
  doctorData = collection(this.firestore, 'doctors');

  constructor( private firestore : Firestore) { 


  }

  //add doctor
  addDoctor(doctor : Doctor){
    return addDoc ( this.doctorData, doctor)
  }
  // get doctors list 
  getDoctorsList(){
    return collectionData (this.doctorData, {
        idField :'id'
      })
    }

  // get all doctors
  // getAllDoctors(){
  //   return this.db.collection('/doctors').snapshotChanges();
  // }

  // delete doctor
  //  deleteDoctor( doctor : Doctor){
  //   // this.firestore.collection('doctors').doc(doctor.id).delete();
  //  }

  // // update doctor
  // updateDoctor(doctor : Doctor){
  //   this.doctorRef.update({
  //     name : doctor.name,
  //     degree : doctor.degree,
  //     hospital : doctor.hospital,
  //     email : doctor.email,
  //     mobile : doctor.mobile
  //   });
  // }

  //delete doctor
  deleteDoctor(id : string){
    const deleteDr = doc( this.firestore,'doctors', id);
    deleteDoc(deleteDr);
  }

}
