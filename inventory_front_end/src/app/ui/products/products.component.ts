import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  public products!: any;

  public constructor(
    private httpClient : HttpClient
  ) {
  }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() : void{
    this.httpClient.get(
      "http://localhost:8081/api/products"
    ).subscribe(
      {
        next : (data) => {
          this.products = data;
        },
        error : (error) => {
          console.log(error);
        }
      }
    )
  }
}
