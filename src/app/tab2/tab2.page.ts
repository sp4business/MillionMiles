import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  dataSet: any;
  constructor() {
    this.dataSet = [{
      oil: "cat",
      date: "july"
    }, {
      oil: "cat",
      date: "july"
    }, {
      oil: "cat",
      date: "july"
    }, {
      oil: "cat",
      date: "july"
    }]
  }



}
