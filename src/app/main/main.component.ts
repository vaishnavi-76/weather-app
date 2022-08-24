import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  city_name="New Delhi";
  data:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather(){
   var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q="+this.city_name+"&appid=7f4d3ccb05c8fe6b334bbe06736a0acd"
  this.http.get(baseUrl)
      .subscribe(
        res => {
          this.data = res;
        },
        err => {
          alert('error')
        }
      )
  }



}
