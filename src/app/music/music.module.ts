import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    SharedModule
  ],
  declarations: [SearchComponent]
})
export class MusicModule { }
