import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { appApiResources } from './app.constants';
import { Ground } from './model/Ground';
import { PredictParams } from './model/PredictParams';
import { PredictionResult } from './model/Predict Result';
@Injectable({
  providedIn: 'root'
})
export class DefaultsService {

  constructor(private http: HttpClient) {
    this.getAllGrounds().subscribe(data => this.grounds = data);
  }

  grounds: Ground[];

  getHostCountries(): Observable<string[]> {
    return this.http.get<string[]>(appApiResources.hostCountries);
  }

  getTeams(): Observable<string[]> {
    return this.http.get<string[]>(appApiResources.team);
  }

  getYears(): Observable<string[]> {
    return this.http.get<string[]>(appApiResources.years);
  }

  getGround(hostCountry: string): Observable<Ground[]> {
    return this.http.get<Ground[]>(appApiResources.grounds + hostCountry);
  }

  getAllGrounds(): Observable<Ground[]> {
    return this.http.get<Ground[]>(appApiResources.allGrounds);
  }

  getPrediction(data: PredictParams,bat:string,bow:string,year:string,ground:string): Observable<PredictionResult> {
    let query = 'bat='+bat+'&bowl='+bow+'&Year='+year+'&groundId='+this.getGroungId(ground)
    +'&score_10='+data.score_10
    +'&score_15='+data.score_10
    +'&score_20='+data.score_10
    +'&score_25='+data.score_10
    +'&score_30='+data.score_10
    +'&wickets_5='+data.wickets_5
    +'&wickets_10='+data.wickets_10
    +'&wickets_15='+data.wickets_15
    +'&wickets_20='+data.wickets_20
    +'&wickets_25='+data.wickets_25
    +'&wickets_30='+data.wickets_30;
    return this.http.get<PredictionResult>(appApiResources.predict+query);
  }

  getDefaults(bat: string, bow: string, year: string, ground: string): Observable<PredictParams> {

    let queryParams = 'bat=' + bat + '&bowl=' + bow + '&Year=' + year;//+'&groundId='+this.getGroungId(ground);
    return this.http.get<PredictParams>(appApiResources.defaults + queryParams);
  }

  getGroungId(groundName: string) {
    return this.grounds.find(i => groundName === i.groundName).groundID;
  }



}
