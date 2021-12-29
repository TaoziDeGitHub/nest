import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '如果你看到这个，就是成功了！';
  }
}
