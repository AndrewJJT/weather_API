import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getdata();
  }

  dallasWeatherData:{};

  getdata(){
    let dallasweatherobv = this._httpService.getWeatherdata('http://api.openweathermap.org/data/2.5/weather?zip=75210,us&units=imperial&APPID=244f814ba4f6f01736e16c53965ec594');
    dallasweatherobv.subscribe(data => {
      console.log(data);
      this.dallasWeatherData = data;
    })
  }
}
