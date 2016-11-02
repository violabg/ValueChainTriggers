import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  @Input() images: string[];
  @Input('initialize') set initialize(value: boolean) {
    this.shouldInitialize = value;
  };

  private shouldInitialize: boolean = false;

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };
  constructor() { }

  ngOnInit() {
  }

}
