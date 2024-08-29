import { Component, QueryList, ViewChildren } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormBuilder, UntypedFormGroup, FormArray, FormControl, Validators } from '@angular/forms';
// Range Slider
import { Options } from 'ngx-slider-v2';

// Sweet Alert
import Swal from 'sweetalert2';

import { productModel } from './products.model';
import { AdvancedService } from './products.service';
import { NgbdProductsSortableHeader, productSortEvent } from './products-sortable.directive';

// Products Services
import { restApiService } from "../../../core/services/rest-api.service";
import { GlobalComponent } from '../../../global-component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})

/**
 * Products Components
 */
export class ProductsComponent {

  data: any = [];

  // bread crumb items
  breadCrumbItems!: Array<{}>;

  url = GlobalComponent.API_URL;
  content!: productModel[];
  products!: any;
  user = [];
  Brand: any = [];
  Rating: any = [];
  discountRates: number[] = [];
  contactsForm!: UntypedFormGroup;
  total: any;
  totalbrand: any;
  totalrate: any;
  totaldiscount: any;
  allproduct: any;

  allproducts: any;
  activeindex = '1';
  allpublish: any;
  grocery: any = 0;
  fashion: any = 0;
  watches: any = 0;
  electronics: any = 0;
  furniture: any = 0;
  accessories: any = 0;
  appliance: any = 0;
  kids: any = 0;
  totalpublish: any = 0;

  // Table data
  productList!: Observable<productModel[]>;
  allproductList!: Observable<productModel[]>;
  total$: Observable<number>;
  @ViewChildren(NgbdProductsSortableHeader) headers!: QueryList<NgbdProductsSortableHeader>;
  searchproducts: any;
  publishedproduct: any;


  constructor(private modalService: NgbModal,
    private router: Router,
    public service: AdvancedService,
    private formBuilder: UntypedFormBuilder,
    public restApiService: restApiService) {
    this.productList = service.countries$;
    this.allproductList = service.allproduct$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {

    this.mostrarData(),

    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Ecommerce' },
      { label: 'Products', active: true }
    ];


    /**
     * fetches data
     */
    setTimeout(() => {
      this.productList.subscribe(x => {
        this.content = this.products;
        this.products = Object.assign([], x);
      });

      this.allproductList.subscribe(x => {
        this.allproducts = Object.assign([], x);
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000)

    setTimeout(() => {
      for (var i = 0; i < this.allproducts.length; i++) {
        if (this.allproducts[i].category == 'Kitchen Storage & Containers') {
          this.grocery += 1
        }
        if (this.allproducts[i].category == 'Clothes') {
          this.fashion += 1
        }
        if (this.allproducts[i].category == 'Watches') {
          this.watches += 1
        } if (this.allproducts[i].category == 'Electronics') {
          this.electronics += 1
        } if (this.allproducts[i].category == 'Furniture') {
          this.furniture += 1
        } if (this.allproducts[i].category == 'Bike Accessories') {
          this.accessories += 1
        }
        if (this.allproducts[i].category == 'Tableware & Dinnerware') {
          this.appliance += 1
        }
        if (this.allproducts[i].category == 'Bags, Wallets and Luggage') {
          this.kids += 1
        }
        if (this.allproducts[i].status == 'published') {
          this.totalpublish += 1
        }
      }
    }, 2000);

    /**
   * Form Validation
   */
    this.contactsForm = this.formBuilder.group({
      subItem: this.formBuilder.array([]),
    });
  }

  /**
   * Pagination
   */
  // loadPage(page: number) {
  //   this.startIndex = (this.page - 1) * this.pageSize + 1;
  //   this.endIndex = (this.page - 1) * this.pageSize + this.pageSize;
  //   if (this.endIndex > this.totalRecords) {
  //     this.endIndex = this.totalRecords;
  //   }
  //   this.products = this.allproducts.slice(this.startIndex - 1, this.endIndex);
  // }

  /**
* change navigation
*/
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 1) {
      this.activeindex = '1'
      this.service.productStatus = ''
    }
    if (changeEvent.nextId === 2) {
      this.activeindex = '2'
      this.service.productStatus = 'published'
    }
    if (changeEvent.nextId === 3) {
      this.activeindex = '3'
      this.service.productStatus = ''
    }
  }

  /**
  * Sort table data
  * @param param0 sort the column
  *
  */
  onSort({ column, direction }: productSortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.productsortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  /**
  * Delete Model Open
  */
  deleteId: any;
  confirm(content: any, id: any) {
    this.deleteId = id;
    this.modalService.open(content, { centered: true });
  }

  // Delete Data
  deleteData(id: any) {
    if (id) {
      this.restApiService.deleteData(id).subscribe({
        next: data => { },
        error: err => {
          this.content = JSON.parse(err.error).message;
        }
      });
      document.getElementById('p_' + id)?.remove();
    }
    else {
    }
  }

  // Price Slider
  minValue = 0;
  maxValue = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  /**
   * Default Select2
   */
  multiDefaultOption = 'Watches';
  selectedAccount = 'This is a placeholder';
  Default = [
    { name: 'Watches' },
    { name: 'Headset' },
    { name: 'Sweatshirt' },
  ];


  /**
  * Search Product
  */
  search(value: string) {
    if (this.activeindex == '1') {
      if (value) {
        this.products = this.allproducts.filter((val: any) =>
          val.category.toLowerCase().includes(value)
        );
        this.total = this.products.length;
      } else {
        this.products = this.searchproducts
        this.total = this.allproducts.length;
      }
    } else if (this.activeindex == '2') {
      if (value) {
        this.publishedproduct = this.publishedproduct.filter((val: any) =>
          val.category.toLowerCase().includes(value)
        );
        this.total = this.publishedproduct.length;
      } else {
        this.publishedproduct = this.allpublish
        this.total = this.publishedproduct.length;
      }
    }
  }

  clearall(ev: any) {
    this.minValue = 0;
    this.maxValue = 1000;
    var checkboxes: any = document.getElementsByName('checkAll');
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false
    }
    // this.service.searchTerm = ''
    this.totalbrand = 0;
    this.totaldiscount = 0;
    this.totalrate = 0;
    this.Brand = []
    this.Rating = []
    this.discountRates = []
    const iconItems = document.querySelectorAll('.filter-list');
    iconItems.forEach((item: any) => {
      var el = item.querySelectorAll('a')
      el.forEach((item: any) => {
        item.classList.remove("active");
      })
    });
    this.service.searchTerm = '';
    this.service.ProductFilter = '';
    this.service.productRate = 0;
    this.service.productPrice = 0;
  }

  godetail(id: any) {
    this.router.navigate(['/ecommerce/product-detail/1', this.products[id]])
  }

  gopublishdetail(id: any) {
    this.router.navigate(['/ecommerce/product-detail/1', this.publishedproduct[id]])
  }

  mostrarData() {
    this.service.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
      }
    );
  }
}
