import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Appointment } from 'src/app/model/appointment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentListModalComponent } from '../appointment-list-modal/appointment-list-modal.component';

@Component({
  selector: 'app-appoinment-list',
  templateUrl: './appoinment-list.component.html',
  styleUrls: ['./appoinment-list.component.css']
})
export class AppoinmentListComponent implements OnInit {

  appointments : any;

  constructor(
    private appointmentService : AppointmentService,
    private firestore : AngularFirestore,
    private modal : NgbModal
  ) { this.getAllAppointments()}

  ngOnInit(): void {
  }

  getAllAppointments(){
    this.firestore.collection('appointments').snapshotChanges().subscribe((res)=>{
      this.appointments = res.map(e => Object.assign({id:e.payload.doc.id},e.payload.doc.data()));
    })
  }
  deleteAppointment(appointment : Appointment){
    alert("Delete order?")
    this.appointmentService.deleteAppointment(appointment);
  }



  openModal(appointment : Appointment){
    const modalRef = this.modal.open(AppointmentListModalComponent,{
      size : 'lg',
      centered : true,
    })
    modalRef.componentInstance.appointment = appointment;
  }

}
