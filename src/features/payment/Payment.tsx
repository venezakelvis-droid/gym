import { useState } from "react";
import "./Payment.css";
import Resume from "./components/Resume";
import type { CustomerData } from "./ICustomerData";
import type { PaymentMethod } from "./TypeMentMethod";
import FormPayment from "./components/FormPayment";
import CepRequest from "../../api/Cep";
import Loading from "../../shared/loading/Loading";




function Payment() {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("pix");
    
    const [isLoading, setIsLoading] = useState(false);

    const [customer, setCustomer] = useState<CustomerData>({
        fullName: "",
        email: "",
        cep: "",
        address: "",
        number: "",
        neighborhood: "",
    });

    const handleChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ): Promise<void> => {
        const { name, value } = e.target;

        let newValue = value;

        if (name === "cep") {
            newValue = value.replace(/\D/g, "").slice(0, 8);
        }

        if (name === "cep" && newValue.length === 8) {
            try {
                const data = await CepRequest(newValue, setIsLoading);

                setCustomer((prev) => ({
                    ...prev,
                    cep: newValue,
                    address: data.logradouro,
                    neighborhood: data.bairro,
                }));

                setIsLoading(false)

                console.log("pay", isLoading)

                return; 

            } catch (error) {
                console.error("Erro ao consultar CEP:", error);

                setIsLoading(false)

                return;
            }
        }

        // Atualiza estado primeiro
        setCustomer((prev) => ({
            ...prev,
            [name]: newValue,
        }));

        
    };


    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();

        const payload = {
            customer,
            paymentMethod,
        };

        console.log("Pagamento:", payload);
    }
    
    if(!!isLoading) return <Loading/>

    return (
        <div className="payment-page">
            <h1 className="payment-title">Pagamento</h1>

            <div className="payment-grid">

                <Resume
                    product="Whey Protein 900g"
                    frete={29.90}
                    price={499.00}
                    quantity="2"

                />


                <div className="payment-card">
                    <h2>Dados e Pagamento</h2>

                    <FormPayment
                        customer={customer}
                        paymentMethod={paymentMethod}
                        onChange={handleChange}
                        onPaymentMethodChange={setPaymentMethod}
                        onSubmit={handleSubmit}
                    />

                </div>
            </div>
        </div>
    );
}

export default Payment;
