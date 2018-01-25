import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


import { PostService } from './post.service';

@Injectable()
export class ChartDataService {
  private getTableUrl: string = '';
  private getOptionsUrl: string = '';
  private getDatasetInfoUrl: string = '';
  private getChartTypesUrl: string = '';
  private getMapAddressesByIDURL: string = '';
  private getMapAddressesByNameURL: string = '';
  private getRawMapDataURL: string = '';
  private getDatasetChartTypesURL: string = '';
  private deleteDatasetURL: string = '';
  private getDeletedDatasetsURL: string = '';
  private reenableDeletedDatasetURL: string = ''

  constructor(private post: PostService) { }

  getChartTypes(datasetId: string) {
    return this.post.getJSON(
      this.getChartTypesUrl + datasetId
    );
  }

  postDeletedDataset(datasetId: string) {
    return this.post.getText(
      this.deleteDatasetURL + datasetId
    );
  }

  getDeletedDatasets() {
    return this.post.getJSON(
      this.getDeletedDatasetsURL
    );
  }

  reenableDataset(datasetId: string) {
    return this.post.getText(
      this.reenableDeletedDatasetURL + datasetId
    );
  }

  getDatasetInfo(datasetId: string = '') {
    return this.post.getJSON(
      this.getDatasetInfoUrl + datasetId
    );
  }

  getDataTable(datasetId: string, chartType: string) {
    return this.post.getJSON(
      this.getTableUrl + datasetId + '/' + chartType
    );
  }

  getDataTableOptions(datasetId: string) {
    return this.post.getJSON(
      this.getOptionsUrl + datasetId
    );
  }

  getDatasetsByChartTypes(chartType: string) {
    return this.post.getJSON(
      this.getDatasetChartTypesURL + chartType
    );
  }

  getMapAddressesByID(datasetId: string) {
    return this.post.getJSON(
      this.getMapAddressesByIDURL + datasetId
    ).toPromise();
  }

  getMapAddressesByName(chartName: string) {
    return this.post.getJSON(
      this.getMapAddressesByNameURL + chartName
    ).toPromise();
  }

  getRawMapData(datasetId: string) {
    return this.post.getJSON(
      this.getRawMapDataURL + datasetId
    ).toPromise();
  }

}