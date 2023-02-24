import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as productActions from 'src/app/redux/actions/product.action';
import { Product } from 'src/app/redux/models/product.model';
import { ProductState } from 'src/app/redux/states/product.state';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-gear',
  templateUrl: './add-gear.component.html',
  styleUrls: ['./add-gear.component.scss']
})
export class AddGearComponent {
  constructor(private store: Store<{ product: ProductState }>, private httpService: HttpService) { }

  @ViewChild('imgFileInput') fileInput: any;
  @ViewChild('upload') upload: any;

  name: any;
  description: any;
  price: any;
  imagePath: any;
  category: any;
  quantity: any;

  imageName: string = '';

  ngOnInit() {

  }

  async onSubmit() {
    let productForm: Product = {
      id: Date.now(),
      name: this.name,
      description: this.description,
      price: parseInt(this.price),
      image: this.imagePath ? this.imagePath : 'default.jpg',
      category: this.category,
      quantity: parseInt(this.quantity)
    }
    let res = await this.httpService.postProduct(productForm);
    res.subscribe((res: any) => {
      console.log(res.body);
    })
  }

  async onFileSelected(event: any) {
    let imageFile: File = event.target.files[0];
    this.imageName = imageFile.name;
    this.imagePath = (await this.httpService.uploadImage(imageFile, this.imageName)).name;
    console.log(this.imagePath);
  }

}
