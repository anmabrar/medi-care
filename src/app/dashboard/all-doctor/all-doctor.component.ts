import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/dashboard/services/doctor.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Doctor } from 'src/app/model/doctor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.css']
})
export class AllDoctorComponent implements OnInit {

  Doctors : any;
 

  constructor( 
    private doctorService :DoctorService,
    private firestore : AngularFirestore,
    private modal : NgbModal) { 
      this.getAllDoctors()
    }

  ngOnInit(): void {}



  getAllDoctors() {

    this.firestore.collection('doctors').snapshotChanges().subscribe((res) => {
      this.Doctors = res.map(e =>
        Object.assign({id :e.payload.doc.id},e.payload.doc.data())
      );
    })
  }
  
  deleteDoctor(doctor : Doctor){
    this.doctorService.deleteDoctor(doctor);
  }
  

 
}
