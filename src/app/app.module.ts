import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LensProvider } from '../providers/lens-provider';
import { Search } from '../providers/search';
import { AuthProvider } from '../providers/auth-provider';
import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { SpherePage } from '../pages/sphere/sphere';
import { ModalityPage } from '../pages/modality/modality';
import { DailyPage } from '../pages/daily/daily';
import { ConfirmationPage } from '../pages/confirmation/confirmation';
import { ReferalPage } from '../pages/referal/referal';
import { OrderDetailsPage } from '../pages/order-details/order-details'; 
import { SearchResultPage } from '../pages/search-result/search-result';
import { LensViewPage } from '../pages/lens-view/lens-view';
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SpherePage,
    ModalityPage,
    DailyPage,
    ConfirmationPage,
    ReferalPage,
    OrderDetailsPage,
    SearchResultPage,
    LensViewPage,
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
    SearchResultPage,
    LensViewPage,
    AuthPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, LensProvider, AuthProvider, Search]
})
export class AppModule {}
