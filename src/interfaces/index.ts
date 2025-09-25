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
    name: string,
    label: string,
    type: string,
}