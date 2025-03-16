import { Product } from "../../../types/products";



export const addToCart = (product : Product) => {
    const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

     const exixtingProductIndex = cart.findIndex(item => item._id === product._id)

     if(exixtingProductIndex > -1){
        cart[exixtingProductIndex].quantity += 1;
     } else {
        cart.push(
            {
                ...product, quantity: 1
            }
        )
     }
     localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string)=>{
    let cart : Product[] = JSON.parse(localStorage.getItem('cart')  || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart' , JSON.stringify(cart))
    }

    export const updateCartQuantity = (productId :string, Quant : number) => {
        const cart : Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
        const productIndex = cart.findIndex(item => item._id === productId)
        if(productIndex > -1){
            cart[productIndex].quantity = Quant;
        }
    }
    
      export const getCartItems = () : Product[] => {
          return JSON.parse(localStorage.getItem('cart') || '[]')
      }
