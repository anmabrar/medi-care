import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from 'rxfire/auth';

import { Doctor } from 'src/app/model/doctor';




@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctorsRef !: AngularFireList<any>;
  doctorRef !: AngularFireObject<any>;

  constructor( private firestore : AngularFireDatabase) { }



  //add doctor
  addDoctor(doctor : Doctor){
    // doctor.id = this.firestore.createId();
    // return this.firestore.collection('doctors').add(doctor);
    this.doctorsRef.push({
      name : doctor.name,
      degree : doctor.degree,
      hospital : doctor.hospital,
      email : doctor.email,
      mobile : doctor.mobile
    });
  }

    // grt doctor by id
    getDoctorDoc(id :string){
      this.doctorRef = this.firestore.object('doctors/'+id);
      return this.doctorRef;
    }
  
    // get doctors list 
    getDoctorsList(){
      this.doctorsRef = this.firestore.list('doctors');
      return this.doctorsRef;
    }

  // get all doctors
  // getAllDoctors(){
  //   return this.db.collection('/doctors').snapshotChanges();
  // }

  // //delete doctor
  // deleteDoctor( doctor : Doctor){
  //   this.firestore.collection('doctors').doc(doctor.id).delete();
  // }

  // update doctor
  updateDoctor(doctor : Doctor){
    this.doctorRef.update({
      name : doctor.name,
      degree : doctor.degree,
      hospital : doctor.hospital,
      email : doctor.email,
      mobile : doctor.mobile
    });
  }

  //delete doctor
  deleteDoctor(id : string){
    this.doctorRef = this.firestore.object('doctors/'+id);
    this.doctorRef.remove();
  }

}
