import { ProductImages } from './ProductImages';

export interface Product {

        id: number;
        productName: string;
        productDescription: string;
        color: string;
        photoUrl: string;
        productImages?: ProductImages[];
}
