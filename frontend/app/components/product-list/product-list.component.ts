import { Component, OnInit } from '@angular/core';
import {Wine} from '../../common/wine';
import {WineService} from '../../services/wine.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products: Wine[] = [];
  constructor(private wineService: WineService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
    this.wineService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    );
  }
}
