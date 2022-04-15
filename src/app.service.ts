import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'config';

@Injectable()
export class AppService {
  constructor(
    // @Inject('API_KEY') private apiKey: string, // was replaced for the config service
    @Inject('TASKS') private tasks: any, // this is injected from the global gatabase module
    // private configService: ConfigService, // was replaced for TypeConfig
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  getHello(): string {
    // const apiKey = this.configService.get('API_KEY'); // the better way
    const apiKey = this.configService.apiKey;
    console.log(apiKey);
    return `Hello World! ${apiKey}
    Tasks:
    ${this.tasks} 
    `;
  }
}
