import type { CustomerData } from "../../ICustomerData";
import type { PaymentMethod } from "../../TypeMentMethod";

export interface FormPaymentProps {
  customer: CustomerData;
  paymentMethod: PaymentMethod;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}