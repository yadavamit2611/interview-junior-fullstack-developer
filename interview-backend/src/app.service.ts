import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  private readonly citiesData: any[];
  constructor(){
    const dataPath = path.join(__dirname, '../../cities.json'); 
    const rawData = fs.readFileSync(dataPath, 'utf8');
    this.citiesData = JSON.parse(rawData);
  }

  searchCities(query: string): string[] {
    return this.citiesData.filter((city) =>
      city.cityName.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
  }
  getHello(): string {
    return 'Hello World!';
  }
}
