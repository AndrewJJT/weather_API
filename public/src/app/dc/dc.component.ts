import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  
  dcWeatherData:{};

  ngOnInit() {
    this.getdata()
  }


  getdata(){
    let dcweatherobv = this._httpService.getWeatherdata('http://api.openweathermap.org/data/2.5/weather?zip=20010,us&units=imperial&APPID=244f814ba4f6f01736e16c53965ec594');
    dcweatherobv.subscribe(data => {
      console.log(data);
      this.dcWeatherData = data;
    })
  }

}
