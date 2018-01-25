import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChartModule } from '../charts/chart.module';

import { DatasetComponent } from './dataset.component';
import { DataCatalogLinkComponent } from '../data-catalog/data-catalog-link/data-catalog-link.component';

@NgModule({
  imports: [
    CommonModule,
    ChartModule,
    RouterModule
  ],
  declarations: [ 
    DatasetComponent,
    DataCatalogLinkComponent
  ],
  exports: [
    DataCatalogLinkComponent
  ]
})
export class DatasetModule { }
