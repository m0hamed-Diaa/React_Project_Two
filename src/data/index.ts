import { v4 as uuid} from "uuid"
import type { IProduct } from "../interfaces/index"

export const ProductList: IProduct[] = [
    {
        id: uuid(),
        title: "2022 Genesis GV70: Nomine....",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, doloribus. A sleek black porsche parked on the street. A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: "$210,000,0",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        }
    },
    {
        id: uuid(),
        title: "Chevrolet Spark. 995cc Pertrol",
        describtion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, doloribus. A sleek black porsche parked on the street.",
        imageUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price: "$170,000,0",
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
        price: "$250,000,0",
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
        price: "$2000,000",
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
        price: "$150,000,0",
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
        price: "$800,000",
        colors: ["#FF0032", "#2563eb", "#FF6E31"],
        catogrey: {
            name: "Cars",
            imageUrl: "https://images.unsplash.com/photo-1669882571988-edc22e213bba?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
    },
]

