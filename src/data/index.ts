import { v4 as uuid} from "uuid"
import type { IFormInput, IProduct, ICategory } from "../interfaces/index"

export const ProductList: IProduct[] = [
    {
        id: uuid(),
        title: "2022 Genesis GV70: Nomine",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, doloribus. A sleek black porsche parked on the street. A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: "2100000",
        colors: ["#FF7289", "#FE67f3", "#FF6E31", "#BEb703"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }
    },
    {
        id: uuid(),
        title: "Chevrolet Spark. 995cc Petrol",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, doloribus. A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: "1700000",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }
    },
    {
        id: uuid(),
        title: "2022 BMW 2000CC: Strong",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, doloribus. A sleek black porsche parked on the street. A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1730175305117-6459a6f6b3e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "2500000",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1730175305117-6459a6f6b3e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
    {
        id: uuid(),
        title: "running black Porsche sedan",
        describtion: "Browse premium related images on iStock | Save 20% with code UNSPLASH20. A sleek black porsche parked on the street. A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        price: "2000000",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHx8MA%3D%3D",
        }
    },
    {
        id: uuid(),
        title: "2024 PORSCHE 2600CC: Germany",
        describtion: "A sleek black porsche parked on the street.A sleek black porsche parked on the street.A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1669235219888-a0f83616aad9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "1500000",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1669235219888-a0f83616aad9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
    {
        id: uuid(),
        title: "2019 Honday CO70 Germeny",
        describtion: "black bmw m 3 on road during night time. A sleek black porsche parked on the street.A sleek black porsche parked on the street.A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1669882571988-edc22e213bba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: "800000",
        colors: ["#FF00BB", "#2563eb", "#000"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1669882571988-edc22e213bba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
]

export const formInputList: IFormInput[] = [
    {
        id: "title",
        name: "title",
        label: "Product Title",
        type: "text"
    },
    {
        id: "describtion",
        name: "describtion",
        label: "Product Description",
        type: "text"
    },
    {
        id: "image",
        name: "imageUrl",
        label: "Product ImageUrl",
        type: "text"
    },
    {
        id: "price",
        name: "price",
        label: "Product Price",
        type: "text"
    },
]

export const Colors: string[] =  [
    "#a855f7",
    "#2563eb",
    "#84D2C5",
    "#13005A",
    "#A31ACB",
    "#FF6E31",
    "#3C2A21",
    "#6C4AB6",
    "#CB1C8D",
    "#000000",
    "#645CBB",
    "#1F8A70",
    "#820000",
    "#FF0032"
]

export const categories: ICategory[] = [
    {
        id: uuid(),
        name: "Nike",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: uuid(),
        name: "T-Shirt",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: uuid(),
        name: "Clothes",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: uuid(),
        name: "PC Desktop",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        id: uuid(),
        name: "Sport Shoes",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
]
