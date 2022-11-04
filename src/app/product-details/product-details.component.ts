import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  product: Product | undefined;
  // ngOnInit(): void {
  // }
  log() {console.log("this from console test",this.route)}
  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap; //how??
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
