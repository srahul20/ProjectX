import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ConfigureOptions } from './configure-options';
import { ConfigureService } from './configure.service';
import { NgModule, ModuleWithProviders, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    providers: [
        ConfigureService,
        ConfigureOptions,
        {
            provide: APP_INITIALIZER,
            useFactory: init,
            multi: true,
            deps: [ConfigureService, HttpClient]
        }
    ]
})
export class NgConfigureModule {
    public static forRoot(): ModuleWithProviders<NgConfigureModule> {
        return {
            ngModule: NgConfigureModule,
            providers: [ConfigureService, ConfigureOptions]
        };
    }
}

export function init(configService: ConfigureService, http: HttpClient) {
    return () => configService.load();
}
