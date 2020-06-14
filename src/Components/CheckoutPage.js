import React from 'react';

import CheckoutForm from './CheckoutForm';

const CheckoutPage = (props) => {
    return (
        <div className="mt-4 mx-4">
            <h3>Checkout</h3>
            <p>Enter the details of where<sup>*</sup> you'd like your food delivered<sup>**</sup></p>

            <small className="text-danger">* Note: We only deliver food within Islamabad</small><br></br>
            <small className="text-danger">** Note: Your order will be delivered after 5 hours as per our policy</small>
            <CheckoutForm></CheckoutForm>
        </div>
    );
}

export default CheckoutPage;