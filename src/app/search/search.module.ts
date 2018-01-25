import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchSimpleFormComponent } from './search-simple-form/search-simple-form.component';
import { SearchComponent } from './search.component';
import { AppRoutingModule } from '../app-routing.module';
import { DatasetModule } from '../dataset/dataset.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    DatasetModule,
    NgxPaginationModule
  ],
  declarations: [
    SearchSimpleFormComponent, 
    SearchComponent,    
  ],
  exports: [
    SearchSimpleFormComponent
  ]
})
export class SearchModule { }
