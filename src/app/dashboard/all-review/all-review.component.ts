import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { Review } from 'src/app/model/review';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReviewModalComponent } from '../review-modal/review-modal.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-all-review',
  templateUrl: './all-review.component.html',
  styleUrls: ['./all-review.component.css']
})
export class AllReviewComponent implements OnInit {

  reviews:any;

  constructor( 
    private reviewService : ReviewService,
    private firestore : AngularFirestore,
    private modal : NgbModal ){
    this.getAllReview();
   }

  ngOnInit(): void {
  }

  getAllReview(){
    this.firestore.collection('reviews').snapshotChanges().subscribe((res)=>{
      this.reviews = res.map(e =>
        Object.assign({id : e.payload.doc.id},e.payload.doc.data())
        );
    })

  }

  deleteReview( review : Review){
    this.reviewService.deleteReview(review);
  }

  openModal(review : Review){
    const modalRef = this.modal.open(ReviewModalComponent, {
			size: 'lg',
			centered: true,
		});
    modalRef.componentInstance.review = review;
  }

}
