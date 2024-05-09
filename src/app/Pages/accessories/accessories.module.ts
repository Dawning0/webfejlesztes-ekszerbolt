import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessoriesRoutingModule } from './accessories-routing.module';
import { AccessoriesComponent } from './accessories.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CurrencyExchangePipe } from '../../Shared/services/currency-exchange.pipe';


@NgModule({
  declarations: [
    AccessoriesComponent,
    CurrencyExchangePipe
  ],
  imports: [
    CommonModule,
    AccessoriesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule

  ]
})
export class AccessoriesModule { }
