import produce from 'immer';

import { toast } from 'react-toastify';

export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCTS_TO_CART_SUCCESS':
            return produce(state, (draft) => {
                draft.push({...action.products});
                toast.success('Produto adicionado ao seu carrinho');
            });

        case 'REMOVE_PRODUCTS_TO_CART':
            return produce(state, (draft) => {
                const productsIndex = draft.findIndex((t) => t.id === action.id);

                if (productsIndex >= 0) {
                    draft.splice(productsIndex, 1);
                    toast.success('Produto retirado do carrinho');
                }
            });

        default:
            return state;
    }
}