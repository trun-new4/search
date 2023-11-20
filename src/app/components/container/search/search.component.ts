import { Component } from '@angular/core';
import { CompanySearchService } from '@app/services/company-search/company-search.service';
import { SearchInputComponentConfig } from '@app/components/presentation/search-input/search-input.component';
import { SearchResultsComponentConfig } from '@app/components/presentation/search-results/search-results.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass',
  providers: [CompanySearchService]
})
export class SearchComponent {
  constructor(
    private companySearchService: CompanySearchService,
    private router: Router) {}

  results: any;
  companyOfficers: any;

  searchComponentConfig: SearchInputComponentConfig = {
    searchTerm: '',
    onSearch: this.search.bind(this),
    onSelect: this.selectItem.bind(this)
  };

  searchResultsComponentConfig: SearchResultsComponentConfig = {
    searchTerm: '',
    onSelect: this.selectItem.bind(this)
  }

  search(searchTerm: string): void {
    /* TODO: Validate is a searchable input */
    this.searchComponentConfig.searchTerm = searchTerm;
    this.searchResultsComponentConfig.searchTerm = searchTerm;
    this.searchIsBusy();
    this.fetch();
  }

  searchIsBusy(): void {
    this.searchComponentConfig.isBusy = true;
    this.searchResultsComponentConfig.isBusy = true;
  }

  searchIsComplete(): void {
    this.searchComponentConfig.results = this.results;
    this.searchComponentConfig.isBusy = false;

    this.searchResultsComponentConfig.results = this.results;
    this.searchResultsComponentConfig.totalResults = this.results?.total_results;
    this.searchResultsComponentConfig.isBusy = false;


  }



  fetch(): void {
    this.companySearchService.search('d').subscribe((results: any)=> {
      /* TODO Santise results for UX component */
      this.results = results;
      this.searchIsComplete();
    });
  }

  selectItem(result: any): void {
    /* TODO Typings of Result */
    const companyNumber = result.company_number;
    this.router.navigate(['/company/'+ companyNumber]);
  }
}
