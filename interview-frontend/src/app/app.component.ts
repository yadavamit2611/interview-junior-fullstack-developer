import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'City Finder';
  searchQuery: string = '';
  cities: any[] = [];

  constructor(private http: HttpClient){
  }
 
  searchCities() {
    this.http
      .get<any[]>(`api/cities?query=${this.searchQuery}`)
      .subscribe((response:string[]) => {
        this.cities = response;
      });
  }
}
