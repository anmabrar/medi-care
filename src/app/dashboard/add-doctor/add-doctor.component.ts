import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DoctorService } from '../services/doctor.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  // doctorList : Doctor[] = [];

  doctorObj: Doctor ={
    id :'',
    name : '',
    degree : '',
    hospital : '',
    email : '',
    mobile : ''
  };


  name : string ='';
  degree : string ='';
  hospital : string ='';
  email : string ='';
  mobile : string ='';

  constructor( private doctorService : DoctorService, private firestore : AngularFirestore) { }

  ngOnInit(): void {
    this.doctorService.getDoctorsList();

  }

  resetForm(){
    
    this.name ='';
    this.degree='';
    this.hospital='';
    this.email='';
    this.mobile='';
  }

  addDoctor(){
    if (this.name == '' || this.degree == '' || this.hospital == '' || this.email == '' || this.mobile == ''){
      alert('Fill all input fields');
      return;
    }
    
    this.doctorObj.name = this.name;
    this.doctorObj.degree = this.degree;
    this.doctorObj.hospital = this.hospital;
    this.doctorObj.email = this.email;
    this.doctorObj.mobile = this.mobile;

    this.doctorService.addDoctor(this.doctorObj);
    this.resetForm();
  }

}
