import {Component, ViewChild, AfterViewInit} from '@angular/core';

@Component({
  selector: 'App',
  template: require('./createjs.html'),
  directives: []
})
export class Createjs implements AfterViewInit {
  @ViewChild('canvasBox') canvasBox;
  @ViewChild('createjs1') myCanvas;

  id: any;
  rectW: number = window.innerWidth;
  rectH: number = window.innerHeight;
  rectColor: string = '#FF0000';
  context: any;

  constructor() {
    console.log('コンストラクター');

  }

  onResize(event) {
  //   this.rectW = event.target.innerWidth;
  //   this.rectH = event.target.innerHeight;
  //   this.context.update();
  //   console.log(this.context);
  }


  ngAfterViewInit() {
    let canvas = this.myCanvas.nativeElement;
        console.log(canvas);
    this.context = new createjs.Stage(canvas);


    let shape = new createjs.Shape();
        shape.graphics.beginStroke('DarkRed');
        shape.graphics.drawRect(0,0,200,100);
        // shape.graphics.drawCircle(0, 0, 100);
        shape.x = 200;
        shape.y = 200;
        shape.alpha = 0.5;


    this.context.addChild(shape);
    this.context.update();
  }

}
