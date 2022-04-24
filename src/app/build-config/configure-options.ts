import { Injectable } from '@angular/core';

@Injectable()
export class ConfigureOptions {
    ConfigurationURL = 'config/config.json';
    AppVersion = '';
    BustCache = false;
}
