import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from '../services/doctor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {


  name !: string ;
  degree !: string ;
  hospital !: string ;
  email !: string ;
  mobile !: string;

  constructor( private doctorService : DoctorService) { }

  ngOnInit(): void {}

  addDoctor(form : NgForm){
    if (this.name == '' || this.degree == '' || this.hospital == '' || this.email == '' || this.mobile == ''){
      alert('Fill all input fields');
      return;
    }
    
    const newDoctor : any = {
      name : this.name,
      degree : this.degree,
      hospital : this.hospital,
      email : this.email,
      mobile : this.mobile,
    };

    this.doctorService.addDoctor(newDoctor).then(()=>{
      alert('Add successfully');
      form.reset();
    })
  }

}
