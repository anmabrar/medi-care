import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { AuthService } from 'src/app/user-auth/auth.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctorList : Doctor[] = [];

  doctorObj: Doctor ={
    id : '',
    name : '',
    degree : '',
    hospital : '',
    email : '',
    mobile : ''
  };

  id : string ='';
  name : string ='';
  degree : string ='';
  hospital : string ='';
  email : string ='';
  mobile : string ='';

  constructor( private doctorData : DoctorService) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  getAllDoctors(){
    this.doctorData.getAllDoctors().subscribe( res=>{
      this.doctorList = res.map((e :any) =>{
        const doctorData = e.payload.doc.doctorData();
        doctorData.id = e.payload.doc.id;
        return doctorData;
      })
    }, err =>{
      alert(err.massage);
    })
  }

  resetForm(){
    this.id = '';
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
    this.doctorObj.id = '';
    this.doctorObj.name = this.name;
    this.doctorObj.degree = this.degree;
    this.doctorObj.hospital = this.hospital;
    this.doctorObj.email = this.email;
    this.doctorObj.mobile = this.mobile;

    this.doctorData.addDoctor(this.doctorObj);
    this.resetForm();
  }

  updateDoctor(){

  }

  deleteDoctor(doctor : Doctor){
    if(window.confirm('Are you sure you want to delete ' + doctor.name + ' ' + doctor.degree + ' ?')){
      this.doctorData.deleteDoctor(doctor);
    }
  }

}
