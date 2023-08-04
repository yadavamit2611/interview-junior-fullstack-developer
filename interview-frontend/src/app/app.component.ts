import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'interview-frontend';
  searchQuery: string = '';
  cities: any[] = [];

  constructor(private http: HttpClient){
  }
 
  searchCities(event: any) {
    const input = event.target as HTMLInputElement;
    const regex = /^[a-zA-Z]+$/;

    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^a-zA-Z]/g, '');
      this.searchQuery = input.value;
    }
    if(this.searchQuery!==""){
        this.http
        .get<any[]>(`api/cities?query=${this.searchQuery}`)
        .subscribe((response:any[]) => {
          this.cities = response;
        });
    }else{
      this.cities = [];
    }
  }
}
