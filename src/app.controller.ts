import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { Controller, Get, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UsePipes(ZodValidationPipe)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
