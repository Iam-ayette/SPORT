import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

 weatherForm!: FormGroup;
   result: any = [];
   weatherResponse:any;
   constructor(private fb: FormBuilder ,private weatherService:WeatherService ) { }
 
   ngOnInit(): void {
     this.weatherForm = this.fb.group({
       city: ['', [Validators.required]],
     });
   }

   search() {
      console.log("here object",this.weatherForm.value);
      this.weatherService.searchWeather(this.weatherForm.value).subscribe(
        (data)=>{
          console.log("here response from weather service", data);
          this.weatherResponse=data.result
        }
      )
   }
}
