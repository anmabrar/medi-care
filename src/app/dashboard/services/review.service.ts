import { Injectable } from '@angular/core';
import { Review } from 'src/app/model/review'; 
import { 
  addDoc,
  collection,
  doc,
  deleteDoc,
  Firestore,
  setDoc
} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewCollectionRef = collection(this.firestore, 'reviews');

  constructor( private firestore : Firestore) { }

  addReview(review : Review){
    return addDoc(this.reviewCollectionRef,review);
  }

  deleteReview(review : Review){
    const reviewRef = doc(this.firestore,`reviews/${review.id}`);
    return deleteDoc(reviewRef);
  }

  updateReview(review : Review){
    const reviewDocRef = doc(this.firestore, `reviews/${review.id}`);
    return setDoc(reviewDocRef,review);
  }

}
