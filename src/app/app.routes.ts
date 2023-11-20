import { Routes } from '@angular/router';
import { CompanyOfficersComponent } from './components/container/company-officers/company-officers.component';
import { HomeComponent } from './components/container/home/home.component';
import { SearchResultsContainerComponent } from './components/container/search-results-container/search-results-container.component';

export const routes: Routes = [
  { path: 'search/:q', component: SearchResultsContainerComponent},
  { path: 'company/:companyNumber', component: CompanyOfficersComponent },
  { path: '**', component: HomeComponent }
];
