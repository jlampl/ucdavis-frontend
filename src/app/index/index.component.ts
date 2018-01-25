import { Component } from '@angular/core';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  heading: string;
  intro: string;
  fillerTextP1: string;
  fillerTextP2: string;

  constructor() { 
    this.fillerTextP1 = `
      This website visualizes all of the data uploaded by the UC Davis Center for Reducing Health Disparities (CRHD).
      By clicking on the "Browse Datasets" tab at the top right-hand corner, you can view all of the available datasets
      the CRHD has to offer.  These datasets are visualized through the use of interactive charts, whose data can be
      downloaded for your perusal.  The datasets presented on this site range from gender and ethnic disparities
      amongst employees of the City of Sacramento to miscellaneous statistical data that would be useful as interactive
      charts.
      `;
    this.fillerTextP2 = `
      You can also search for specific datasets using the above search bar or navigate to the "About" tab at 
      the top right-hand corner of this page to learn more about the CRHD, its mission, and its association
      with the University of California at Davis.
    `;

    this.heading = 'CRHD Data Visualization';
    this.intro = 'Powered by the Center for Reducing Health Disparities';
  }
}
