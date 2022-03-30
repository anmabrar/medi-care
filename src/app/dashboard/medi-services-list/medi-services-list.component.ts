import { Component, OnInit } from '@angular/core';
import { MediServicesService } from '../services/medi-services.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MediServices } from 'src/app/model/medi-services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MediServicesModalComponent } from '../medi-services-modal/medi-services-modal.component';


@Component({
  selector: 'app-medi-services-list',
  templateUrl: './medi-services-list.component.html',
  styleUrls: ['./medi-services-list.component.css']
})
export class MediServicesListComponent implements OnInit {


  medi_services :any;

  constructor(
    private mediServicesService : MediServicesService,
    private  firestore : AngularFirestore,
    private modal : NgbModal
  ) { this.getMediServices() }

  ngOnInit(): void {
  }

  getMediServices(){
    this.firestore.collection('medi-services').snapshotChanges().subscribe((res)=>{
      this.medi_services = res.map(e =>
        Object.assign({id: e.payload.doc.id},e.payload.doc.data())
        );
    })
  }

  deleteMediServices( medi : MediServices){
    this.mediServicesService.deleteMedi(medi);
  }

  openModal( medi : MediServices){
    const modalRef =this.modal.open(MediServicesModalComponent,{
      size : 'lg',
      centered : true,
      
    })
    modalRef.componentInstance.medi = medi;
  }
}
