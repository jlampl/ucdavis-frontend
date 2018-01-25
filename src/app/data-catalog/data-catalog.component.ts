import { Component } from '@angular/core';

import { ChartDataService } from '../services/chart-data.service';

import { Dataset } from '../dataset/dataset';

@Component({
  selector: 'data-catalog',
  templateUrl: './data-catalog.component.html',
  styleUrls: ['./data-catalog.component.css']
})
export class DataCatalogComponent {
  public datasets: Dataset[];
  public page: number = 1;  
  public isFiltered: boolean = false;

  constructor(private post: ChartDataService) {
    this.getAllDatasets();
  }

  getAllDatasets() {
    this.isFiltered = false;
    this.post.getDatasetInfo().subscribe(
      posts => { 
        this.datasets = posts;
      }
    );
  }

  filterBy(chartType: string) {
    this.isFiltered = true;
    this.post.getDatasetsByChartTypes(chartType).subscribe(
      posts => {
        this.datasets = posts;
      }
    )
  }

}
