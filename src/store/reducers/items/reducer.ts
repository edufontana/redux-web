import {Reducer} from 'redux';

export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface Items {
  product: Product;
  quantity: number;
}

export interface ItemState {
  items: Items[];
}

const INITIAL_STATE: ItemState = {
  items: [],
};

export const items: Reducer<ItemState> = (state = INITIAL_STATE, action) => {

  switch(action.type){
    case 'ADD_PRODUCT':{

      const { product } = action.payload;

      return {
        ...state,
        items:[
          ...state.items,
          {
            product,
            quantity: 1,
          }
        ]
      }
    }
    default:{
      return state
    }

  }
};
