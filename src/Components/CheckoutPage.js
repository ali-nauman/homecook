import React from 'react';

import CheckoutForm from './CheckoutForm';

const CheckoutPage = (props) => {
    return (
        <div className="mt-4 mx-4">
            <h3>Checkout</h3>
            <p>Enter the details of where<sup>*</sup> you'd like your food delivered</p>

            <small className="text-danger">* Note: We only deliver food within Islamabad!</small>
            <CheckoutForm></CheckoutForm>
        </div>
    );
}

export default CheckoutPage;