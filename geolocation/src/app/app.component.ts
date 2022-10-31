import { Component, OnInit } from '@angular/core';
import {GeolocationService} from '@ng-web-apis/geolocation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'geolocation';

  constructor(private readonly geolocation$: GeolocationService) {}
  
  getPosition() {
    this.geolocation$.subscribe(position => 
     console.log(position));
}

ngOnInit() {
  this.getPosition();
}

}
