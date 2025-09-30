/**
 * 
 * @param product 
 * @returns 
 */

export const productValidation = (product: { title: string, describtion: string, imageUrl: string, price:string}) => {
    const errors: {title: string, describtion: string, imageUrl: string, price: string} = {
        title: "",
        describtion: "",
        imageUrl: "", 
        price: "",               
    };

    const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageUrl);

    if (!product.title.trim() || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Product title must be between 10 and 80 characters!";
    }
    
    if (!product.describtion.trim() || product.describtion.length < 10 || product.describtion.length > 900) {
        errors.describtion = "Product describtion must be between 10 and 900 characters!";
    }

    if (!product.imageUrl.trim() || !validUrl) {
        errors.imageUrl = "Valid image URL is required";
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Valid Price is required";
    }

    return errors;
}
