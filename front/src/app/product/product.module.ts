import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { ProductsComponent } from './products/products.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DataViewModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CardModule,
    ConfirmPopupModule,
    TagModule,
    DropdownModule,
    RatingModule,
    DialogModule,
  ],

})
export class ProductModule { }
