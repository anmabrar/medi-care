import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Booking } from 'src/app/model/booking';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderListModalComponent } from '../order-list-modal/order-list-modal.component';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders : any;

  constructor(
    private bookingService : BookingService,
    private firestore : AngularFirestore,
    private modal : NgbModal
  ) { this.getAllOrders()}

  ngOnInit(): void {
  }

  getAllOrders(){
    this.firestore.collection('booking').snapshotChanges().subscribe((res)=>{
      this.orders = res.map(e => Object.assign({id:e.payload.doc.id},e.payload.doc.data()));
    })
  }
  deleteOrder(order : Booking){
    alert("Delete order?")
    this.bookingService.deleteBooking(order);
  }



  openModal(order : Booking){
    const modalRef = this.modal.open(OrderListModalComponent,{
      size : 'lg',
      centered : true,
    })
    modalRef.componentInstance.order = order;
  }

}
