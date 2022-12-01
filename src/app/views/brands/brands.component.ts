import { Component, OnInit } from '@angular/core';
import { Brands } from 'src/app/models/brands.model';

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
    const ktm = {
      image: '../../../../assets/img/brands/ktm.png',
      name: 'Ktm',
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

    this.brands = [ktm, bmw, ducati, honda, kawasaki, yamaha];
  }
}
