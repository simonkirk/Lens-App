import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LensProvider } from '../providers/lens';
import { AuthProvider } from '../providers/auth-provider';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { SpherePage } from '../pages/sphere/sphere';
import { ModalityPage } from '../pages/modality/modality';
import { DailyPage } from '../pages/daily/daily';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { ReferalPage } from '../pages/referal/referal';
import { OrderDetailsPage } from '../pages/order-details/order-details';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        HomePage,
                        SpherePage,
                        ModalityPage,
                        DailyPage,
                        ConfirmationPage,
                        ReferalPage,
                        OrderDetailsPage,
                        AuthPage
                    ],
                    imports: [
                        IonicModule.forRoot(MyApp)
                    ],
                    bootstrap: [IonicApp],
                    entryComponents: [
                        MyApp,
                        HomePage,
                        SpherePage,
                        ModalityPage,
                        DailyPage,
                        ConfirmationPage,
                        ReferalPage,
                        OrderDetailsPage,
                        AuthPage
                    ],
                    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, LensProvider, AuthProvider]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map