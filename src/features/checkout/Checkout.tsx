import { ChangeEvent, FormEvent, useState } from 'react';

import { CheckoutForm } from './CheckoutForm';

export const Checkout = () => {
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
  });

  const handleFormValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(currentAddress => ({
      ...currentAddress,
      [event.target.name]: event.target.value.trim(),
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!address.line1.length) return;

    alert(
      `Order confirmed! Your order will be shipped to ${address.line1}${
        address.line2.length ? `, ${address.line2}` : ''
      }!`
    );
  };

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
      <CheckoutForm
        address={address}
        onFormValueChange={handleFormValueChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
