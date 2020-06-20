import { CartType } from './types';
import { ProductType } from 'modules/products/types';

export const getProductQuantity = ({product, cart}: {product: ProductType, cart?: CartType}): number => {
    if(!cart?.items?.length){
        return 0
    } else {
        return cart.items.find(item => item.id === product.id)?.quantity || 0
    }
}

export const getTotalSum = ({products, cart}: {products: ProductType[], cart: CartType}): number => 
cart.items.map(item => item.quantity*(products.find(product => product.id === item.id)?.price || 0)).reduce((total, item) => total + item, 0)

export const getTotalItems = ({cart}: {cart: CartType}): number => 
cart.items.map(item => item.quantity)?.reduce((total, item) => total + item, 0)