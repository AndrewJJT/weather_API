import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  seattleWeatherData:{};

  ngOnInit() {
    this.getdata()
  }

  getdata(){
    let seattleweatherobv = this._httpService.getWeatherdata('http://api.openweathermap.org/data/2.5/weather?zip=98101,us&units=imperial&APPID=244f814ba4f6f01736e16c53965ec594');
    seattleweatherobv.subscribe(data => {
      console.log(data);
      this.seattleWeatherData = data;
    })
  }


}
