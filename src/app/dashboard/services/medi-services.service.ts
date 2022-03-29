import { Injectable } from '@angular/core';
import { MediServices } from 'src/app/model/medi-services';
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
export class MediServicesService {

  mediServicesCollectionRef = collection(this.firestore,'medi-services')

  constructor( private firestore : Firestore) { }

  addMedi( medi : MediServices){
    return addDoc(this.mediServicesCollectionRef,medi);
  }

  deleteMedi(medi : MediServices){
    const mediRef = doc(this.firestore,`medi-services/${medi.id}`);
    return deleteDoc(mediRef);
  }

  updateMedi(medi : MediServices){
    const mediDocReF = doc(this.firestore,`medi-services/${medi.id}`);
    return setDoc(mediDocReF,medi);
  }
}
