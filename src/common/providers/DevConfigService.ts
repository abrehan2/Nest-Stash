// Imports:
import { Injectable } from '@nestjs/common';

@Injectable()
export class DevConfigService {
  DBHost = 'localhost';

  getDBHost(): string {
    return this.DBHost;
  }
}
