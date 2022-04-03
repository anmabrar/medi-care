import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/dashboard/services/doctor.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Doctor } from 'src/app/model/doctor';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';

@Component({
  selector: 'app-best-doctor',
  templateUrl: './best-doctor.component.html',
  styleUrls: ['./best-doctor.component.css']
})
export class BestDoctorComponent implements OnInit {

  Doctors : any;

  constructor(
    private doctorService :DoctorService,
    private firestore : AngularFirestore,
    private modal : NgbModal
  ) {this.getAllDoctors() }

  ngOnInit(): void {
  }

  getAllDoctors() {

    this.firestore.collection('doctors').snapshotChanges().subscribe((res) => {
      this.Doctors = res.map(e =>
        Object.assign({id :e.payload.doc.id},e.payload.doc.data())
      );
    })
  }

  openModal(doctor :string ){
    const modalRef = this.modal.open(AppointmentModalComponent,{
      size : 'lg',
      centered : true,
    })
    modalRef.componentInstance.doctorName = doctor;
  }

}
