import { Component, OnInit } from '@angular/core';
import { MediServicesService } from '../services/medi-services.service';
import { NgForm } from '@angular/forms';
import { MediServices } from 'src/app/model/medi-services'; 

@Component({
  selector: 'app-add-medi-service',
  templateUrl: './add-medi-service.component.html',
  styleUrls: ['./add-medi-service.component.css']
})
export class AddMediServiceComponent implements OnInit {

 
  service_name !: string;
  discription !: string;
  photo !: string;
  price !: string;
  

  constructor( private mediServicesService : MediServicesService ) { }

  ngOnInit(): void {}


  addMediServices(form : NgForm){
    const newMediServices : any = {
      service_name : this.service_name,
      discription : this.discription,
      photo : this.photo,
      price : this.price
    };
    
    this.mediServicesService.addMedi(newMediServices).then(()=>{
      alert('Add successfully');
      form.reset();
    })
  }
  

}
