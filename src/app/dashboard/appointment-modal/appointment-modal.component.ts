import { Component, OnInit } from '@angular/core';
import { AppoinmentService } from '../services/appoinment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.css']
})
export class AppointmentModalComponent implements OnInit {

  patient_name !: string;
  age !: string;
  address !: string;
  mobile !: string;
  problem !: string;
  time !: string;
  data !: string;

  constructor(private appoinmentService : AppoinmentService) { }

  ngOnInit(): void {
  }

  addAppoinment(form : NgForm){
    const newAppoinment : any = {
      patient_name : this.patient_name,
      age : this.age,
      address: this.address,
      problem : this.problem,
      time : this.time,
      data : this.data
    }
    this.appoinmentService.addAppoinment(newAppoinment).then(()=>{
      alert('Add successfully');
      form.reset();
    })
  }

}
