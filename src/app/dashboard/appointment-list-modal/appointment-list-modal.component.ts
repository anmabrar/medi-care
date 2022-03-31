import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from '../services/appointment';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-appointment-list-modal',
  templateUrl: './appointment-list-modal.component.html',
  styleUrls: ['./appointment-list-modal.component.css']
})
export class AppointmentListModalComponent implements OnInit {

  @Input() appointment !: Appointment;
  
  constructor(
    public activeModal : NgbActiveModal,
    private appointmentService : AppointmentService
  ) { }

  ngOnInit(): void {
  }

  updateAppointment(){
    this.appointmentService.updateAppointment(this.appointment).then(()=>{
      this.activeModal.close();
    })
  }

}
