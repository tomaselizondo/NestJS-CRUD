import { HttpModule, HttpService } from '@nestjs/axios';
import { Module, Global } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

const API_KEY = 'akfkjhasfadwrofwf';
const API_KEY_PROD = 'PRODdfladsff';

@Global()
@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'TASKS',
      inject: [HttpService],
      useFactory: async (http: HttpService) => {
        const tasks = await http.get(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const value = (await Promise.resolve(firstValueFrom(tasks))).data;
        return value;
      },
    },
  ],
  exports: ['API_KEY', 'TASKS'],
})
export class DatabaseModule {}
