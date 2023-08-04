import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/cities')
  searchCities(@Query('query') query: string) {	
    return this.appService.searchCities(query);
  } 

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
