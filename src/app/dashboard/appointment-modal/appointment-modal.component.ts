import { Component, Input, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit {

  @Input() doctorName !: string;

  doctor_name !: string;
  patient_name !: string;
  age !: string;
  address !: string;
  mobile !: string;
  problem !: string;
  time !: string;
  data !: string;

  constructor(
    private appointmentService : AppointmentService,
    public activeModal : NgbActiveModal,
    ) { }

  ngOnInit(): void {
  }

  addAppointment(form : NgForm){
    const newAppointment : any = {
      doctor_name : this.doctorName,
      patient_name : this.patient_name,
      age : this.age,
      address: this.address,
      problem : this.problem,
      time : this.time,
      data : this.data
    }
    this.appointmentService.addAppointment(newAppointment).then(()=>{
      alert('Add successfully');
      form.reset();
      this.activeModal.close();
    })
  }

}
