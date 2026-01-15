import type { Resume } from "./interfaces/IResume";
import "./style/Resume.css"

function Resume({ frete, price, product, quantity }: Resume) {
    return (

        <div className="payment-card">
            <h2>Resumo do Pedido</h2>

            <div className="order-item">
                <span>Produto</span>
                <strong>{product}</strong>
            </div>

            <div className="order-item">
                <span>Quantidade</span>
                <strong>{quantity}</strong>
            </div>

            <div className="order-item">
                <span>Frete</span>
                <strong>R$ {frete}</strong>
            </div>

            <div className="order-total">
                <span>Total</span>
                <strong>R$ {price}</strong>
            </div>
        </div>
    )
}

export default Resume;