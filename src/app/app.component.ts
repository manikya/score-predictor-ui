import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { PredictParams } from './model/PredictParams';
import { SliderOptions } from './model/SliderOptions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  ngOnInit(): void {
    this.valueObject = new PredictParams();
    this.sliderOptions = new SliderOptions();
    this.simpleItems = [true, 'Two', 3];
  }
  
  title = 'score-predictor';
  valueObject : PredictParams ;
  sliderOptions : SliderOptions;
  selectedSimpleItem = 'Two';
    simpleItems = [];
 
 
}
