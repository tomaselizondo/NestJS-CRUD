import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string, // was replaced for the config service
    @Inject('TASKS') private tasks: any, // this is injected from the global gatabase module
    private configService: ConfigService,
  ) {}
  getHello(): string {
    const apiKey = this.configService.get('API_KEY'); // the better way
    console.log(apiKey);
    return `Hello World! ${apiKey}
    Tasks:
    ${this.tasks} 
    `;
  }
}
