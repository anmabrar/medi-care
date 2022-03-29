import { Component, OnInit } from '@angular/core';
import { MediServicesService } from '../services/medi-services.service';
import { NgForm } from '@angular/forms';

import { 
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'
import { MediServices } from 'src/app/model/medi-services'; 

@Component({
  selector: 'app-add-medi-service',
  templateUrl: './add-medi-service.component.html',
  styleUrls: ['./add-medi-service.component.css']
})
export class AddMediServiceComponent implements OnInit {

  id!: string;
  name!: string;
  email!: string;
  

  constructor( private mediServicesService : MediServicesService ) {
    // this.getData()
   }

  ngOnInit(): void {}


  addMediServices(form : NgForm){
    const newMediServices : any = {
      name: this.name,
      email: this.email,
    }
    this.mediServicesService.addMedi(newMediServices).then(()=>{
      alert('Add successfully');
      form.reset();
    })
  }
  
  // addData( medi : MediServices){
  //   const dbInstance = collection(this.firestore, 'medi-service');
  //   addDoc(dbInstance,medi)
  //   .then(()=>{
  //     alert("Data Sent");
  //   })
  //   .catch((err)=>{
  //     alert(err.massage);
  //   })
  // }

  // getData(){
  //   const dbInstance = collection(this.firestore, 'medi-service');
  //   getDocs(dbInstance)
  //   .then((response) => {
  //     this.data = [...response.docs.map((item) => {
  //       return{...item.data(),id : item.id}
  //     })]
  //   })
  // }


  // updateData(  medi : MediServices ){
  //   const dataToUpdate = doc(this.firestore,'medi-service',medi.id);
  //   updateDoc(dataToUpdate,{
  //     name : medi.name
  //   })
  //   .then(()=> {
  //     alert('Updated');
  //     this.getData()
  //   })
  //   .catch((err)=>{
  //     alert(err.massage)
  //   })
  // }
  // deleteData(id :string){
  //   const dataToDelete = doc(this.firestore,'medi-service',id);
  //   deleteDoc(dataToDelete)
  //   .then(()=> {
  //     alert('Deleted Data');
  //     this.getData()
  //   })
  //   .catch((err)=>{
  //     alert(err.massage)
  //   })
  // }

}
