import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ao-score',
  templateUrl: './ao-score.component.html',
  styleUrls: ['./ao-score.component.scss']
})
export class AoScoreComponent implements OnInit {
  score:any = 0;
  penelty1: any = 0;
  penelty2: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.score += 1;
  }
  onMinus(){
    this.score -= 1;
  }
  onAdd2(){
    this.score += 2;
  }
  onMinus2(){
    this.score -= 2;
  }
  onAdd3(){
    this.score += 3;
  }
  onMinus3(){
    this.score -= 3;
  }

  onClick1(){
    this.penelty1 += 1;
    if (this.penelty1 >= 5) {
      this.penelty1 -= this.penelty1;
    }
  }
  onClick2(){
    this.penelty2 += 1;
    if (this.penelty2 > 4) {
      this.penelty2 -= this.penelty2;
    }
  }
  onUndo(){
    this.score -= this.score;
    this.penelty1 -= this.penelty1;
    this.penelty2 -= this.penelty2;
  }
}
