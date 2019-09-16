import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getdata()
  }

  chicagoWeatherData:{};

  getdata(){
    let chicagoweatherobv = this._httpService.getWeatherdata('http://api.openweathermap.org/data/2.5/weather?zip=60609,us&units=imperial&APPID=244f814ba4f6f01736e16c53965ec594');
    chicagoweatherobv.subscribe(data => {
      console.log(data);
      this.chicagoWeatherData = data;
    })
  }


}
