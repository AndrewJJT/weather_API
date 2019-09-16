import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

 
  burbankWeatherData:{};

  ngOnInit() {
    this.getdata()
  }

  getdata(){
    let burbankweatherobv = this._httpService.getWeatherdata('http://api.openweathermap.org/data/2.5/weather?zip=91505,us&units=imperial&APPID=244f814ba4f6f01736e16c53965ec594');
    burbankweatherobv.subscribe(data => {
      console.log(data);
      this.burbankWeatherData = data;
    })
  }
}
