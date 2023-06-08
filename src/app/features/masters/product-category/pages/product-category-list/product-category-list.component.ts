import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductCategoryService } from '../../shared/product-category.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent {
  displayedColumns: string[] = [
  "referenceId",
  "name",
  "updatedDate",
  "StatusFlag",
  "action"
];

resultsLength = 0;
isLoadingResults = true;
isRateLimitReached = false;

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;
@ViewChild("Status", { static: true }) status: MatSelect;
@ViewChild("searchKeyword", { static: true }) search: ElementRef;

dataSource = new MatTableDataSource();
constructor(
  private router: Router,
  private productCategoryService: ProductCategoryService
) {}

ngOnInit(): void {
  this.getAllData();
}
getAllData() {
  this.productCategoryService.getProductList().subscribe((res) => {
    console.log(">>>",res);
    this.dataSource.data = res.data;
    this.resultsLength = res.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}


goToEditPage(uid: string) {
  this.router.navigate([`/masters/branch-types/edit/` + uid]);
}
goToDetailsPage(uid: string) {
  this.router.navigate([`/masters/branch-types/detail/` + uid]);
}
goToCreate() {
  this.router.navigate(['/masters/productCategory/create']);
}
}