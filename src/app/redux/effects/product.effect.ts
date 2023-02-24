import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as ProductActions from "../actions/product.action";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { HttpService } from "src/app/services/http.service";
import { Product } from "../models/product.model";

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private httpService: HttpService) { }

    loadProducts$ = createEffect(() => this.actions$.pipe(
        ofType(ProductActions.loadProducts),
        switchMap(
            (actions) => this.httpService.getAllProducts()
        ),
        map(
            (products: any) => ProductActions.loadProductsSuccess({ products })
        ),
        catchError(
            (error) => of(ProductActions.loadProductsFailure({ error }))
        )
    ));
}
