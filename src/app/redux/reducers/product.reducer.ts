import { createReducer, on } from "@ngrx/store";
import { Product } from "../models/product.model";
import * as ProductActions from "../actions/product.action";
import { ProductState } from "../states/product.state";

export const initialState: ProductState = {
    products: [],
    isLoading: false,
    error: ''
}

export const productReducer = createReducer(
    initialState,
    on(ProductActions.loadProducts, state => ({ ...state, isLoading: true })),
    on(ProductActions.loadProductsSuccess, (state, { products }) => ({ ...state, products, isLoading: false })),
    on(ProductActions.loadProductsFailure, (state, { error }) => ({ ...state, error, isLoading: false }))
);