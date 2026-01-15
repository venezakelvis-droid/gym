import React from "react";
import type { FormPaymentProps } from "./interfaces/IFormPayment";
import "./style/FormPayment.css"



function FormPayment({
  customer,
  paymentMethod,
  onChange,
  onPaymentMethodChange,
  onSubmit,
}: FormPaymentProps) {
  return (
    <form className="payment-form" onSubmit={onSubmit}>
      {/* DADOS */}
      <div className="form-group">
        <label>Nome completo</label>
        <input
          name="fullName"
          value={customer.fullName}
          onChange={onChange}
          placeholder="Seu nome completo"
          required
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={customer.email}
          onChange={onChange}
          placeholder="seu@email.com"
          required
        />
      </div>

      {/* ENDEREÇO */}
      <div className="form-row">
        <div className="form-group">
          <label>CEP</label>
          <input
            name="cep"
            value={customer.cep}
            onChange={onChange}
            placeholder="00000-000"
            maxLength={9}
          />
        </div>

        <div className="form-group">
          <label>Número</label>
          <input
            name="number"
            value={customer.number}
            onChange={onChange}
            placeholder="123"
          />
        </div>
      </div>

      <div className="form-group">
        <label>Endereço</label>
        <input
          name="address"
          value={customer.address}
          onChange={onChange}
          placeholder="Rua / Avenida"
        />
      </div>

      <div className="form-group">
        <label>Bairro</label>
        <input
          name="neighborhood"
          value={customer.neighborhood}
          onChange={onChange}
          placeholder="Bairro"
        />
      </div>

      {/* MÉTODO */}
      <div className="payment-method">
        <span>Método de pagamento</span>

        <label className={paymentMethod === "pix" ? "active" : ""}>
          <input
            type="radio"
            name="paymentMethod"
            checked={paymentMethod === "pix"}
            onChange={() => onPaymentMethodChange("pix")}
          />
          Pix
        </label>

        <label className={paymentMethod === "card" ? "active" : ""}>
          <input
            type="radio"
            name="paymentMethod"
            checked={paymentMethod === "card"}
            onChange={() => onPaymentMethodChange("card")}
          />
          Cartão
        </label>

        <label className={paymentMethod === "boleto" ? "active" : ""}>
          <input
            type="radio"
            name="paymentMethod"
            checked={paymentMethod === "boleto"}
            onChange={() => onPaymentMethodChange("boleto")}
          />
          Boleto
        </label>
      </div>

      <button className="pay-button" type="submit">
        Finalizar Pagamento
      </button>
    </form>
  );
}

export default FormPayment;
