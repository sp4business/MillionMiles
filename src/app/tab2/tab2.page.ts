import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  item: String;
  dataSet: any;
  constructor() {
    this.item = "item stuff"
    this.dataSet = [{oil:"cat",
                    date: "july"
  },{oil:"cat",
  date: "july"
},{oil:"cat",
date: "july"
},{oil:"cat",
date: "july"
}]
  }



}
