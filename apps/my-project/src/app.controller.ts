import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { IRequest } from './index'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: IRequest): string {
    console.log(req.statusCode)
    return this.appService.getHello()
  }
}
