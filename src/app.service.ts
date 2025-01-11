// Imports:
import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private defConfigService: DevConfigService,
    @Inject('CONFIG')
    private config: { port: string },
  ) {}
  getHello(): string {
    return (
      'Hello World! This is hosted on ' +
      this.defConfigService.getDBHost() +
      ' and the port is ' +
      this.config.port
    );
  }
}
