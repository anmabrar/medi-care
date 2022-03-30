import { Injectable } from '@angular/core';
import { Appoinment } from 'src/app/model/appoinment';
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
export class AppoinmentService {

  appoinmentCollectionRef = collection( this.firestore,'appoinments');

  constructor( private firestore : Firestore) { }

  addAppoinment(appoinment : Appoinment){
    return addDoc( this.appoinmentCollectionRef,appoinment);
  }

  deleteAppoinment(appoinment : Appoinment){
    const appoinmentRef = doc(this.firestore,`appoinments/${appoinment.id}`);
    return deleteDoc(appoinmentRef);
  }

  updateAppoinment(appoinment : Appoinment){
    const appoinmentDocRef = doc(this.firestore,`appoinments/${appoinment.id}`);
    return setDoc(appoinmentDocRef,appoinment);
  }
}
