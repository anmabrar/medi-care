import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from '../services/doctor.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-modal',
  templateUrl: './doctor-modal.component.html',
  styleUrls: ['./doctor-modal.component.css']
})
export class DoctorModalComponent implements OnInit {

  @Input() doctor !: Doctor;

  constructor(
    public activeModal : NgbActiveModal,
    private doctorService : DoctorService
  ) { }

  ngOnInit(): void {
  }

  updateDoctor(){
    this.doctorService.updateDoctor(this.doctor).then(()=>{
      this.activeModal.close();
      
    })
  }

}
