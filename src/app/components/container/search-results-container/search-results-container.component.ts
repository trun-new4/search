import { Component, Input, SimpleChanges } from '@angular/core';
import { CompanySearchService } from '@app/services/company-search/company-search.service';
import { Router } from '@angular/router';
import { SearchResultsComponentConfig } from '@app/components/presentation/search-results/search-results.component';

@Component({
  selector: 'app-search-results-container',
  templateUrl: './search-results-container.component.html',
  styleUrl: './search-results-container.component.sass',
  providers: [CompanySearchService]
})
export class SearchResultsContainerComponent {
  @Input() q = '';

  results: any;

  searchResultsComponentConfig: SearchResultsComponentConfig = {
    searchTerm: '',
    onSelect: this.selectItem.bind(this)
  }

  constructor(
    private companySearchService: CompanySearchService,
    private router: Router) {}

  onSearch(): void {
    this.search();
    console.log('onSearch')
  }

  ngOnChanges(changes: SimpleChanges): void {
    if( changes['q'].currentValue !== changes['q'].previousValue) {
      this.onSearch();
    }
  }

  search(): void {
    this.companySearchService.search(this.q).subscribe((results: any)=> {
      /* TODO Santise results for UX component */
      this.results = results;
      this.searchResultsComponentConfig.results = this.results;
      this.searchResultsComponentConfig.searchTerm = this.q;
    });
  }

  selectItem(result: any): void {
    /* TODO Typings of Result */
    const companyNumber = result.company_number;
    this.router.navigate(['/company/'+ companyNumber]);
  }

}
