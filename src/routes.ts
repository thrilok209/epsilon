import { Routes } from '@angular/router';
import { AdminConsoleComponent } from './app/pages/admin-console/admin-console.component';
import { ReportsViewComponent } from './app/pages/reports-view/reports-view.component';
import { DetailReportViewComponent } from './app/pages/detail-report-view/detail-report-view.component';
import { LandingPageComponent } from './app/pages/landing-page/landing-page.component';
import { AddingSummaryPageComponent } from './app/pages/admin_view/adding-summary-page/adding-summary-page.component';
import { MethodologyPageComponent } from './app/pages/methodology-page/methodology-page.component';
import { AboutPageComponent } from './app/pages/about-page/about-page.component';
import { ContactPageComponent } from './app/pages/contact-page/contact-page.component';
import { UnderConstructionPageComponent } from './app/pages/under-construction-page/under-construction-page.component';






export const routes: Routes = [
  {path: '', redirectTo: 'Home' , pathMatch: 'full'},
  { path: 'create',
    component: AdminConsoleComponent
  },
  { path: 'create/summary/:id',
    component: AddingSummaryPageComponent
  },
  {
    path: 'viewreport/:id',
    component: DetailReportViewComponent,
    children: [
       {path: '', redirectTo: 'report-summary' , pathMatch: 'full'},                        //<---- child components declared here
           {
               path:'report-summary',
               component: DetailReportViewComponent
           },
           {
               path:'table-content',
               component: DetailReportViewComponent
           }


       ]

  },
  { path: 'allreports',
    component: ReportsViewComponent
  },
  { path: 'Home',
    component: LandingPageComponent
  },
  { path: 'methodology',
    component: MethodologyPageComponent
  },
  { path: 'about',
    component: AboutPageComponent
  },
  { path: 'contact',
    component: ContactPageComponent
  },
  { path: 'uc/:page',
    component: UnderConstructionPageComponent
  }
];

export const reportViewRoutes: Routes = [


]
