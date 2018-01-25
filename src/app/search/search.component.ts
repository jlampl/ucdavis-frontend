import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { SearchSimpleFormComponent } from './search-simple-form/search-simple-form.component';
import { SearchResultsService } from '../services/search-results.service';
import { Dataset } from '../dataset/dataset';
import { DataCatalogLinkComponent } from '../data-catalog/data-catalog-link/data-catalog-link.component';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchResultsService]
})
export class SearchComponent implements OnInit {
  private subscription: any;
  public searchParam: string;    
  public results: Dataset[] = [];
  public numOfResults: number = 0;
  public page: number = 1;  

  private body: string = `Bacon ipsum dolor amet beef sirloin shank, tenderloin meatball picanha tongue. Pig venison andouille, 
    picanha cow ribeye spare ribs ham hock landjaeger jowl chuck bacon kevin short loin boudin. Ham hock chuck 
    hamburger sirloin. Boudin pork belly landjaeger andouille venison ribeye tongue alcatra biltong sausage jerky 
    short loin drumstick t-bone.

    Pork boudin doner frankfurter hamburger pork belly leberkas pig. Tri-tip capicola shoulder kevin, pork loin 
    corned beef short ribs pastrami fatback shankle short loin beef ribs. Ground round leberkas meatball burgdoggen 
    salami. Beef salami pork loin pork ground round fatback. Drumstick flank shankle beef corned beef kielbasa frankfurter 
    chuck hamburger meatloaf pork chop sirloin meatball.

    Chuck beef ribs leberkas shank. Pork tongue fatback swine tail pork chop, porchetta corned beef bacon ribeye ham hock pig 
    turkey burgdoggen. Capicola strip steak cow doner alcatra chuck. Salami turducken prosciutto brisket ball tip. Sausage 
    shankle tail swine chicken bacon fatback pancetta ham hock beef tongue shoulder prosciutto.

    Bacon ipsum dolor amet beef sirloin shank, tenderloin meatball picanha tongue. Pig venison andouille, 
    picanha cow ribeye spare ribs ham hock landjaeger jowl chuck bacon kevin short loin boudin. Ham hock chuck 
    hamburger sirloin. Boudin pork belly landjaeger andouille venison ribeye tongue alcatra biltong sausage jerky 
    short loin drumstick t-bone.

    Pork boudin doner frankfurter hamburger pork belly leberkas pig. Tri-tip capicola shoulder kevin, pork loin 
    corned beef short ribs pastrami fatback shankle short loin beef ribs. Ground round leberkas meatball burgdoggen 
    salami. Beef salami pork loin pork ground round fatback. Drumstick flank shankle beef corned beef kielbasa frankfurter 
    chuck hamburger meatloaf pork chop sirloin meatball.

    Chuck beef ribs leberkas shank. Pork tongue fatback swine tail pork chop, porchetta corned beef bacon ribeye ham hock pig 
    turkey burgdoggen. Capicola strip steak cow doner alcatra chuck. Salami turducken prosciutto brisket ball tip. Sausage 
    shankle tail swine chicken bacon fatback pancetta ham hock beef tongue shoulder prosciutto.`;

  constructor(private route: ActivatedRoute, private searchResults: SearchResultsService, private router: Router) { }
  
  ngOnInit(): void {
    this.runSearch();
  }

  runSearch() {
    this.subscription = this.route.params.subscribe(
      params => { 
        this.searchParam = params['query'];
        this.searchResults.getResults(this.searchParam).subscribe(res => {
          this.results = res;
          this.numOfResults = this.results.length;          
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
