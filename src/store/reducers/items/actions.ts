import {Product} from './reducer';
 
export function AddProduct(product: Product) {
 return {
   type: 'ADD_PRODUCT',
   payload: {
     product,
   },
 };
}
