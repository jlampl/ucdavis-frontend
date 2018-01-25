import { Component} from '@angular/core';

import { Carousel } from './carousel';

@Component({
  selector: 'carousel-ucdavis',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent  {
  public carouselComponents: Carousel[] = new Array ({
      pictureSource: "assets/images/CTSC_building_photo.jpg",
      altText: "The CRHD",
      title: "The CRHD",
      body: "The Center for Reducing Health Disparities"
    }, {
      pictureSource: "assets/images/charts.png",
      altText: "Charts",
      title: "Interactive Data",
      body: "Charts Visualizing the Data"
    }, {
      pictureSource: "assets/images/uc_davis.jpg",
      altText: "UC_Davis",
      title: "UC Davis Web App",
      body: "University of California at Davis"
    });
}
