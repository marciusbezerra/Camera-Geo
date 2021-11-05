import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  location: any;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit');
    const video = document.getElementById('video') as any;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.play();
      });
    }
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(data => {
        this.location = `${data.coords.latitude},${data.coords.longitude}`;
      }, err => {
        this.location = err;
      }, { enableHighAccuracy: true });
    }
  }

  ionViewDidLoad() {

  }

}
