import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/dashboard/services/doctor.service';
import { 
  doc,
  Firestore,
  deleteDoc
 } from 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Doctor } from 'src/app/model/doctor';



@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.css']
})
export class AllDoctorComponent implements OnInit {

  Doctors : any;
 

  constructor(  private doctorService :DoctorService, private firestore : AngularFirestore) { }

  ngOnInit(): void {
  this.getAllDoctors()
  }



  getAllDoctors() {

    this.firestore.collection('doctors').snapshotChanges().subscribe((res) => {

      this.Doctors = res.map(e =>
        Object.assign({id :e.payload.doc.id},e.payload.doc.data())
      );
    })
  }
  
  // deleteDoctor(id :string){
  //   console.log("ok");
  //   const deleteDr = doc( this.fireStore,'doctors', id);
  //   deleteDoc(deleteDr);
  //   // this.firestore.collection('doctors').doc(id).delete();
    
    
  // }
  

 
}
