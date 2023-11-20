import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface SearchInputComponentConfig {
  isBusy?: boolean;
  searchTerm: string;
  results?: any;
  onSearch: Function;
  onSelect: Function;
}

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Input() config: SearchInputComponentConfig;
  searchTerm: string;
  _isFocused: boolean;

  constructor(private router: Router) {}

  get shouldShowResults(): boolean {
    return this.config.results?.items?.length && !!this.searchTerm && this.isFocused;
  }

  get isFocused(): boolean {
    return this._isFocused;
  }

  onSearch(): void {
    this.config?.onSearch(this.searchTerm);
  }

  onHardSearch(): void {
    this.onBlur();
    this.router.navigate(['/search/' + this.searchTerm]);
  }

  onSelect(result: any): void {
    /* TODO Typings for result model */
    this.config.onSelect(result);
  }

  onFocus(): void {
    this._isFocused = true;
    console.log('called');
  }

  onBlur(): void {
    this._isFocused = false;
    console.log('blur');
  }
}
