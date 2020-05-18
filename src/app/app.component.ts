import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { PredictParams } from './model/PredictParams';
import { SliderOptions } from './model/SliderOptions';
import { DefaultsService } from './defaults.service';
import { Ground } from './model/Ground';
import { PredictionResult } from './model/Predict Result';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private defaultsService: DefaultsService) { }

  ngOnInit(): void {
    this.valueObject = new PredictParams();
    this.sliderOptions = new SliderOptions();
    this.defaultsService.getHostCountries().subscribe(data => { this.hostCountries = data; this.selectedHostCountry = this.hostCountries[0]; this.countrySelected(this.selectedHostCountry); });
    this.defaultsService.getYears().subscribe(data => { this.years = data; this.selectedYear = data[0] });
    this.defaultsService.getTeams().subscribe(data => { this.teams = data; this.battingTeam = data[0]; this.ballingTeam = data[1] });
   

    console.log(this.hostCountries);
  }

  title = 'score-predictor';
  valueObject: PredictParams;
  sliderOptions: SliderOptions;

  selectedHostCountry: string;
  hostCountries: string[] = [];

  selectedYear: string;
  years: string[] = [];

  selectedGround: string;
  grounds: string[] = [];

  battingTeam: string;
  ballingTeam: string;
  teams: string[];

  predictionResult:PredictionResult = new PredictionResult();

  countrySelected(event) {
    this.grounds = [];
    this.defaultsService.getGround(event).subscribe(data => { this.grounds = this.mapGrounds(data); this.selectedGround = this.grounds[0]; });
    
    console.log(event);
  }

  setDefaults(){
    console.log("set dfaults Clicked");
    this.defaultsService.getDefaults(this.battingTeam,this.ballingTeam,this.selectedYear,this.selectedGround).subscribe(data=> {console.log(data); this.valueObject=data});
  }

  calculateScore() {
    console.log("score Clicked");
    this.defaultsService.getPrediction(this.valueObject,this.battingTeam,this.ballingTeam,this.selectedYear,this.selectedGround).subscribe(data =>{ 
      console.log(data);
      this.predictionResult = data;
    });
  }

  mapGrounds(list: Ground[]): string[] {
    const array = new Array<string>();
    for (let index = 0; index < list.length; index++) {
      const element = list[index];
      array.push(element.groundName);
    }
    return array;
  }

}
