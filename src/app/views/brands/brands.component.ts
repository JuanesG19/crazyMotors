import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  
  brands: Brands[];

  constructor() {}

  ngOnInit(): void {
    this.brandInitialization();
  }

  brandInitialization() {
    const bajaj = {
      image: '../../../../assets/img/brands/bajaj.png',
      name: 'Bajaj',
    };
    const bmw = {
      image: '../../../../assets/img/brands/bmw.png',
      name: 'Bmw',
    };
    const ducati = {
      image: '../../../../assets/img/brands/ducati.PNG',
      name: 'Ducati',
    };
    const honda = {
      image: '../../../../assets/img/brands/honda.png',
      name: 'Honda',
    };
    const kawasaki = {
      image: '../../../../assets/img/brands/kawasaki.png',
      name: 'Kawasaki',
    };
    const yamaha = {
      image: '../../../../assets/img/brands/yamaha.png',
      name: 'Yamaha',
    };

    this.brands = [bajaj, bmw, ducati, honda, kawasaki, yamaha];
  }
}
