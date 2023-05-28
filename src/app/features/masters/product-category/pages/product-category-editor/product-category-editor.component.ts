import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductCategoryService } from '../../shared/product-category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory } from '../../shared/product-category';

@Component({
  selector: 'app-product-category-editor',
  templateUrl: './product-category-editor.component.html',
  styleUrls: ['./product-category-editor.component.css']
})
export class ProductCategoryEditorComponent {
  productCategoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productCategoryService: ProductCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // const branchTypeUid = this.route.snapshot.paramMap.get("uid");
    // if (branchTypeUid) {
    //   this.branchTypeService.getBranchTypes(branchTypeUid).subscribe((res) => {
    //     this.buildProductCategory(res);
    //     this.entityId = res.id;
    //   });
    // } else {
    //   this.buildProductCategory(new BranchType());
    // }
    this.buildProductCategory(new ProductCategory());
  }

  buildProductCategory(productCategory: ProductCategory) {
    this.productCategoryForm = this.fb.group({
      uid: [productCategory.uid],
      name: [productCategory.name,[Validators.required, Validators.maxLength(100), Validators.pattern('^([A-Za-z ]*)$')]],
      status: [productCategory.status]
    });
  }

  get f() {
    return this.productCategoryForm.controls;
  }

  submitForm() {
    console.log("ERRR", this.productCategoryForm.value)
    if (this.productCategoryForm.valid) {
      if (this.f['uid'].value) {
        //
      } else {
        //
        this.productCategoryService.createProductCategory(this.productCategoryForm.value).subscribe((res)=>{
          setTimeout(() => {
            this.router.navigate(['/masters/productCategory']);
          }, 1000);
        })
      }
    }
  }

  // createBranchType() {
  //   const branchType = this.extractBranchTypes();
  //   this.branchTypeService.createBranchTypes(branchType).subscribe((res) => {
  //     this.uiService.showSuccess(
  //       `Branch-Type: ${res.name} is created successfully.`
  //     );
  //     this.router.navigate([`/masters/branch-types`]);
  //   });
  // }


  // updateBranchType() {
  //   const branchType = this.extractBranchTypes();

  //   this.branchTypeService.updateBranchTypes(branchType).subscribe((res) => {
  //     this.uiService.showSuccess(
  //       `Branch-Type: ${res.name} is updated successfully.`
  //     );
  //     this.router.navigate([`/masters/branch-types`]);
  //   });
  // }


  extractBranchTypes(): ProductCategory {
    const productCategory: ProductCategory = {
      uid: this.productCategoryForm.value.uid,
      name: this.productCategoryForm.value.name,
      referenceId: this.productCategoryForm.value.referenceId,
      status: this.productCategoryForm.value.status
    };
    return productCategory;
  }
}

