import type { TypesOfProductsName } from "../components/Types";

export interface IProduct {
    id?: string | undefined,
    title: string,
    describtion: string,
    imageUrl: string,
    price: string,
    colors: string[],
    catogrey: {
        name: string,
        imageUrl: string,
    }
}

export interface IFormInput {
    id: string,
    name: TypesOfProductsName,
    label: string,
    type: string,
}

export interface ICategory {
    id?: string,
    name: string,
    imageUrl: string,
}