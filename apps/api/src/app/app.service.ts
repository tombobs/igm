import { Injectable } from '@nestjs/common';
import { Message } from '@rly.gd/api-interfaces';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
