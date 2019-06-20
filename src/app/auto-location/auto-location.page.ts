import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-location',
  templateUrl: './auto-location.page.html',
  styleUrls: ['./auto-location.page.scss'],
})
export class AutoLocationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
   dismiss(){
  		this.modalCtrl.dismiss();
  	}

}
