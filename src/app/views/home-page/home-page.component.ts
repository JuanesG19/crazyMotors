import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  imageSrc = '';
  imageBike = '';

  images = [
    { imageSrc: '../../../assets/img/bikes/bike1.png' },
    { imageSrc: '../../../assets/img/bikes/bike2.png' },
    { imageSrc: '../../../assets/img/bikes/bike3.png' },
    { imageSrc: '../../../assets/img/bikes/bike4.png' },
    { imageSrc: '../../../assets/img/bikes/bike5.png' },
    { imageSrc: '../../../assets/img/bikes/bike6.png' },
    { imageSrc: '../../../assets/img/bikes/bike7.png' },
    { imageSrc: '../../../assets/img/bikes/bike8.png' },
  ];

  bike1: string;
  bike2: string;
  bike3: string;
  bike4: string;

  constructor() {
   
    this.bike1 = '../../../assets/img/cinematicBikes/img1.jpg';
    this.bike2 = '../../../assets/img/cinematicBikes/img2.jpeg';
    this.bike3 = '../../../assets/img/cinematicBikes/img3.jpeg';
    this.bike4 = '../../../assets/img/cinematicBikes/img4.jpg';

  }

  ngOnInit(): void {
    this.selectImage();
  }

  selectImage(): void {
    var slider: any = <HTMLInputElement>document.getElementById('slider');
    this.imageBike = this.images[slider.value - 1].imageSrc;
  }
}
