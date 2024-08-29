import { Component, OnInit } from '@angular/core';
import { AdvancedService } from '../../ecommerce/products/products.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})

/**
 * Starter Component
 */
export class StarterComponent implements OnInit {

  data: any = [];

  // interface Producto {
  //   id: number;
  //   nombre: string;
  //   precio: number;
  //   img: string;
  //   categoria: string;
  // }


  // bread crumb items
  breadCrumbItems!: Array<{}>;

  constructor(
    public service: AdvancedService,
  ) { }

  ngOnInit(): void {

    this.mostrarData(),

    /**
    * BreadCrumb
    */
     this.breadCrumbItems = [
      { label: 'Pages' },
      { label: 'Starter', active: true }
    ];
  }

  mostrarData() {
    this.service.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
      }
    );
  }

}
