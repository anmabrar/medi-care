import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/model/review';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  id!: string;
  name!: string;
  email!: string;
  review!: string;

  constructor(private reviewService: ReviewService) {}

  ngOnInit(): void {}

  reviewSubmit(form: NgForm) {
    const newReview: any = {
      name: this.name,
      email: this.email,
      review: this.review,
    };
    console.log('ok');
    this.reviewService.addReview(newReview).then(() => {
      alert('Add successfully');
      form.reset();
    });
  }
}
