import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
})
export class ImageSliderComponent implements OnInit {
  
  banner1: string;
  banner2: string;
  banner3: string;
  banner4: string;
  banner5: string;

  constructor() {
    this.banner1 = '../../../../assets/img/banner/banner1.jpg';
    this.banner2 = '../../../assets/img/banner/banner2.jpg';
    this.banner3 = '../../../assets/img/banner/banner3.png';
    this.banner4 = '../../../assets/img/banner/banner4.jpg';
    this.banner5 = '../../../assets/img/banner/banner5.jpg';
  }

  ngOnInit(): void {}
}
