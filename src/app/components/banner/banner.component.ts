import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  
})
export class BannerComponent implements OnInit {

  i : any = "https://www.cleanmoswabs.com/photo/cs33440483-disposable_sterile_swab.jpg"
  j : any = "https://www.cleanmoswabs.com/photo/cs33938765-chg_swab.jpg"
  k : any = "https://www.cleanmoswabs.com/photo/cs33440483-disposable_sterile_swab.jpg"

  images = [this.i, this.j, this.k].map((n) => `${n}`);

  ngOnInit(): void {
  }

}
