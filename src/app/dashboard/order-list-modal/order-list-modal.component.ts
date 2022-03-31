import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/model/booking';
import { BookingService } from '../services/booking.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-list-modal',
  templateUrl: './order-list-modal.component.html',
  styleUrls: ['./order-list-modal.component.css']
})
export class OrderListModalComponent implements OnInit {

  @Input() order !: Booking;

  constructor(
    public activeModal : NgbActiveModal,
    private orderService : BookingService
  ) { }

  ngOnInit(): void {
  }

  updateOrder(){
    this.orderService.updateBooking(this.order).then(()=>{
      this.activeModal.close();
    })
  }

}
