import { Component, OnInit } from '@angular/core';
import { 
  addDoc,
  Firestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore'
import { MediService } from 'src/app/model/medi-care';

@Component({
  selector: 'app-add-medi-service',
  templateUrl: './add-medi-service.component.html',
  styleUrls: ['./add-medi-service.component.css']
})
export class AddMediServiceComponent implements OnInit {

  public data: any =[];

  constructor( public firestore : Firestore) {
    this.getData()
   }

  ngOnInit(): void {
  }
  
  addData( medi : MediService){
    const dbInstance = collection(this.firestore, 'medi-service');
    addDoc(dbInstance,medi)
    .then(()=>{
      alert("Data Sent");
    })
    .catch((err)=>{
      alert(err.massage);
    })
  }

  getData(){
    const dbInstance = collection(this.firestore, 'medi-service');
    getDocs(dbInstance)
    .then((response) => {
      this.data = [...response.docs.map((item) => {
        return{...item.data(),id : item.id}
      })]
    })
  }


  updateData(  medi : MediService ){
    const dataToUpdate = doc(this.firestore,'medi-service',medi.id);
    updateDoc(dataToUpdate,{
      name : medi.name
    })
    .then(()=> {
      alert('Updated');
      this.getData()
    })
    .catch((err)=>{
      alert(err.massage)
    })
  }
  deleteData(id :string){
    const dataToDelete = doc(this.firestore,'medi-service',id);
    deleteDoc(dataToDelete)
    .then(()=> {
      alert('Deleted Data');
      this.getData()
    })
    .catch((err)=>{
      alert(err.massage)
    })
  }

}
