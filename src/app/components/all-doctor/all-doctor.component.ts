import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/dashboard/services/doctor.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Doctor } from 'src/app/model/doctor';

@Component({
  selector: 'app-all-doctor',
  templateUrl: './all-doctor.component.html',
  styleUrls: ['./all-doctor.component.css']
})
export class AllDoctorComponent implements OnInit {

  doctorList : any;

  constructor(private store: AngularFirestore, private doctorData :DoctorService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }




  getAllDoctors() {

    this.store.collection('doctors').snapshotChanges().subscribe((res) => {

      this.doctorList = res.map(e =>
        Object.assign({id :e.payload.doc.id},e.payload.doc.data())
      );
        console.log(res)
    })
  }

 
}
