import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  // HttpCode,
  Param,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('login')
export class LoginController {
  @Post()
  // @HttpCode(200)
  www(@Req() request: Request, @Res() response: Response): void {
    console.log(request.body);
    response.send({
      code: 666,
      data: {
        msg: 'ok',
        username: request.body.username,
      },
    });
  }

  @Get('sss')
  sss(): string {
    return 'this is a login page';
  }

  @Get('test-:id')
  ddd(@Param('id') test): string {
    console.log(test);
    return `hhhhhhhhhhhhhhhhhhh<br/>#${test}`;
  }
}
