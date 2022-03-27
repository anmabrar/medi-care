import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/model/review';
import { ReviewService } from '../services/review.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-review-modal',
  templateUrl: './review-modal.component.html',
  styleUrls: ['./review-modal.component.css']
})
export class ReviewModalComponent implements OnInit {

  @Input() review !: Review;

  constructor(
    public activeModal : NgbActiveModal,
    private reviewService : ReviewService,

  ) { }

  ngOnInit(): void {
  }

  updateReview(){
    this.reviewService.updateReview(this.review).then(()=>{
      this.activeModal.close();
    })
  }

}
