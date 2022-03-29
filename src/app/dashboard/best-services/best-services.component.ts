import { Component, OnInit } from '@angular/core';
import { MediServicesService } from '../services/medi-services.service';
import { MediServices } from 'src/app/model/medi-services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BookingServicesModalComponent } from '../booking-services-modal/booking-services-modal.component';



@Component({
  selector: 'app-best-services',
  templateUrl: './best-services.component.html',
  styleUrls: ['./best-services.component.css']
})
export class BestServicesComponent implements OnInit {

  medi_services : any;

  constructor(
    private mediServicesService : MediServicesService,
    private firestore : AngularFirestore,
    private modal : NgbModal
  ) { this.getMediServices() }

  ngOnInit(): void {
  }

  getMediServices(){
    this.firestore.collection('medi-services').snapshotChanges().subscribe((res)=>{
      this.medi_services = res.map(e=> 
        Object.assign({id:e.payload.doc.id}, e.payload.doc.data())
        );
    })
  }

  openModal(mediServices : MediServices){
    const modalRef = this.modal.open(BookingServicesModalComponent,{
      size : 'lg',
      centered :true,
    });
    modalRef.componentInstance.mediServices = mediServices;
  }


}
