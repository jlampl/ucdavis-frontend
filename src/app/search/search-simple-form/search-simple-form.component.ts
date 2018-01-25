import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Search } from '../search';

@Component({
  selector: 'search-simple-form',
  templateUrl: './search-simple-form.component.html',
  styleUrls: ['./search-simple-form.component.css']
})
export class SearchSimpleFormComponent {
  public search: Search;
  @Output() routeChange: EventEmitter<void> = new EventEmitter<void>();
  
  
  constructor(private router: Router) {
    this.search = new Search; 
  }

  searchCharts(): void {
    this.router.navigate(['/search', this.search.query]);
    this.routeChange.emit();     
  }
}
