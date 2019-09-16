import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getdata();
  }

  sanjoseWeatherData:any;

  getdata(){
    let sanjoseweatherobv = this._httpService.getWeatherdata('http://api.openweathermap.org/data/2.5/weather?zip=95108,us&units=imperial&APPID=244f814ba4f6f01736e16c53965ec594');
    sanjoseweatherobv.subscribe(data => {
      console.log(data);
      this.sanjoseWeatherData = data;
    })
  }
}
