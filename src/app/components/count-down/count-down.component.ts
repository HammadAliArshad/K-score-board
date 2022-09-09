import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

  matchTime: any = 180;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.matchTime = 90;
  }
  onSelect(){
    this.matchTime = 120;
  }
  onTouch(){
    this.matchTime = 180;
  }


}
