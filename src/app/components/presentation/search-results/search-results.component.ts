import { Component, Input } from '@angular/core';

export interface SearchResultsComponentConfig {
  isBusy?: boolean;
  searchTerm: string;
  results?: any;
  onSelect: Function;
  totalResults?: number;
}

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent {
  @Input() config: SearchResultsComponentConfig;

  onSelect(result: any): void {
    /* TODO Typings for result model */
    this.config.onSelect(result);

  }
}
