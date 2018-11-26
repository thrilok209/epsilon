import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { RouterModule } from '@angular/router';
import { routes } from '../routes';

import { AdminConsoleComponent } from './pages/admin-console/admin-console.component';

import {HttpClientModule} from '@angular/common/http';
import { ReportsViewComponent } from './pages/reports-view/reports-view.component';
import { DetailReportViewComponent } from './pages/detail-report-view/detail-report-view.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

import { OwlModule } from 'ngx-owl-carousel';
import { AddingSummaryPageComponent } from './pages/admin_view/adding-summary-page/adding-summary-page.component';
import { UnderConstructionPageComponent } from './pages/under-construction-page/under-construction-page.component';
import { MethodologyPageComponent } from './pages/methodology-page/methodology-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ReportSummaryComponent } from './pages/detail-report-view/report-summary/report-summary.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminConsoleComponent,
    ReportsViewComponent,
    DetailReportViewComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    AddingSummaryPageComponent,
    UnderConstructionPageComponent,
    MethodologyPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ReportSummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
    AppBootstrapModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
     HttpClientModule,
     OwlModule,
     FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
