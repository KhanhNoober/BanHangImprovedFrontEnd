import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/redux/models/product.model';
import { ProductState } from 'src/app/redux/states/product.state';
import * as ProductActions from 'src/app/redux/actions/product.action';

@Component({
  selector: 'app-all-gears',
  templateUrl: './all-gears.component.html',
  styleUrls: ['./all-gears.component.scss']
})
export class AllGearsComponent {
  constructor(private store: Store<{ product: ProductState }>) { }

  products$ = new Observable<Product[]>();

  ngOnInit(): void {
    console.log('AllGearsComponent.ngOnInit()');
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(state => state.product.products);
  }

}
