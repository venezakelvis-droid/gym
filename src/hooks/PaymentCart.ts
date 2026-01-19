import { useCart } from "../providers/CartProvider "
import type { IPaymentCart } from "./IPaymentCart";



const PaymentCart = (): IPaymentCart => {
    const { cart } = useCart();

    let newValue: IPaymentCart = {
        name: "",
        price: 0,
        quantity: 0
    };

    let sumPrice = 0;

    cart.map((value, index) => {
        newValue = {
            name: value.name.concat(...value.name.concat("+"), value.name),
            price: value.price + sumPrice,
            quantity: cart.length
        }
        sumPrice = newValue.price;
    })

    console.log("newValue", newValue)

    return newValue

}

export default PaymentCart