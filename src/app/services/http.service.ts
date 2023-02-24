import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Product } from '../redux/models/product.model';
//import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private httpClient: HttpClient) { }

  environment = {
    api_url: 'http://localhost:3000/',
    api_url_static: 'http://localhost:3000/static/images/',
  };

  httpOptions: { headers: any; observe: any; responseType: any } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    observe: 'response',
    responseType: 'type'
  };

  async getAllProducts() {
    return lastValueFrom(this.httpClient.get(`${this.environment.api_url}gear/`));
  };

  async getProductById(id: number) {
    return this.httpClient.get(`${this.environment.api_url}gear?id=${id}`);
  };

  // async getProductsByCategory(category: string) {
  //   return this.httpClient.get(`${environment.api_url}/gear?category=${category}`);
  // }

  async postProduct(product: Product) {
    //return the response message
    return this.httpClient.post(`${this.environment.api_url}gear/`, product, this.httpOptions);
  }

  async putProduct(product: Product) {
    return this.httpClient.put(`${this.environment.api_url}gear/`, product);
  }

  async deleteProduct(id: number) {
    return this.httpClient.delete(`${this.environment.api_url}gear?id=${id}`);
  }

  async uploadImage(image: File, oldName: string) {
    let response: any;

    let formData = new FormData();
    formData.append('image', image);

    await lastValueFrom(this.httpClient.put(`${this.environment.api_url}gear/upload`, formData, {
      headers: new HttpHeaders({
        'old': oldName
      })
    })).then((res: any) => { response = res; });
    return response;
  }
}
