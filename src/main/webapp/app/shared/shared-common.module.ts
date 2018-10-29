import { NgModule } from '@angular/core';

import { IntApiGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [IntApiGatewaySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [IntApiGatewaySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class IntApiGatewaySharedCommonModule {}
