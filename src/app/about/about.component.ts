import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public aboutTitle: string = `About This Project`;
  public aboutBody: string = `
      This website visualizes all of the data uploaded by the UC Davis Center for Reducing Health Disparities (CRHD).
      By clicking on the "Browse Datasets" tab at the top right-hand corner, you can view all of the available datasets
      the CRHD has to offer.  These datasets are visualized through the use of interactive charts, whose data can be
      downloaded for your perusal, in addition to a host of other customization options.  The datasets presented on this 
      site range from gender and ethnic disparities amongst employees of the City of Sacramento to miscellaneous 
      statistical data that would be useful as interactive charts.
    `;
  public linksTitle: string = `Important Links`;
  public devTeamTitle: string = `About the SB6 Development Team`;
  public devTeamDescription: string = `
      The SB6 development team was comprised of six students from California State University, Sacramento.
      This website is the result of a year-long senior project for the university's Computer Science program 
      in partnership with the UC Davis Center for Reducing Health Disparities.
  `;
}
