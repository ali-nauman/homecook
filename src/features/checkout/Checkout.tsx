import { CheckoutForm } from './CheckoutForm';

export const Checkout = () => {
  return (
    <div className="mt-4 mx-4">
      <h3>Checkout</h3>
      <p>
        Enter the details of where<sup>*</sup> you&apos;d like your food
        delivered
        <sup>**</sup>
      </p>

      <small className="text-danger">
        * Note: We only deliver food within Islamabad
      </small>
      <br></br>
      <small className="text-danger">
        ** Note: Your order will be delivered after 5 hours as per our policy
      </small>
      <CheckoutForm />
    </div>
  );
};
