import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  i: any = 'https://www.linkpicture.com/q/01_155.jpg';
  j: any = 'https://www.linkpicture.com/q/02_186.jpg';
  k: any = 'https://www.linkpicture.com/q/03_156.jpg';

  images = [this.i, this.j, this.k].map((n) => `${n}`);

  ngOnInit(): void {}
}
