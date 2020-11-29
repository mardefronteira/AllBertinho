 import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import * as actions from './actions';

function* addToCart({ products }) {
    const productExist = yield select((state) =>
        state.cart.find((p) => p.id === products.id)
    );

    if (productExist) {
        toast.error('Produto ja existe no carrinho');
        return;
    }

    yield put(actions.addToCartSuccess(products));
}

export default all([
    takeLatest('ADD_PRODUCTS_TO_CART_REQUEST', addToCart),
]);