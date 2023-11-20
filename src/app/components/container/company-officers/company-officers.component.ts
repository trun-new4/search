import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CompanyofficersService } from '@app/services/company-officers/company-officers.service';
import { CompanySearchService } from '@app/services/company-search/company-search.service';
import { OfficerComponentConfig } from '@app/components/presentation/officer/officer.component';

@Component({
  selector: 'app-company-officers',
  templateUrl: './company-officers.component.html',
  styleUrl: './company-officers.component.scss',
  providers: [CompanyofficersService, CompanySearchService]
})
export class CompanyOfficersComponent implements OnChanges {
  @Input() companyNumber = '';

  companyOfficers: any;
  company: any;
  constructor(
    private companyofficersService: CompanyofficersService,
    private companySearchService: CompanySearchService) {}

  get officersCount(): number {
    return this.companyOfficers?.items?.length || 0;
  } 

  onCompanyNumber(): void {
    this.fetch();
    this.getCompany();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes['companyNumber'].currentValue !== changes['companyNumber'].previousValue) {
      this.onCompanyNumber();
    }
  }

  getCompany(): void {
    this.companySearchService.search(this.companyNumber).subscribe((results: any)=> {
      /* TODO Santise results for UX component */
      this.company = results?.items[0];
    });
  }

  fetch(): void {
    this.companyofficersService.fetch(this.companyNumber).subscribe((companyOfficers: any)=> {
      this.companyOfficers = companyOfficers;
    });
  }

  address(officer: any): string {
    return `${officer.address?.premises} 
      ${officer.address?.address_line_1},
      ${officer.address?.address_line_2},
      ${officer.address?.locality},
      ${officer.address?.country},
      ${officer.address?.postal_code}`;

  }
}
