import React from 'react';

import Table from 'react-bootstrap/Table';

function getTotalCost(items) {
    return items.reduce((total, item) => {
        return total + item.item.price * item.item.quantity
    }, 0);
}

const Order = (props) => {
    const orderItems = props.orderItems.map((item, i = 0) =>
        <tr>
            <td>{++i}</td>
            <td>{item.item.name}</td>
            <td>{item.item.serving}</td>
            <td>Rs. {item.item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.item.serving * item.quantity}</td>
            <td>Rs. {item.quantity * item.item.price}</td>
        </tr>
    );
    
    return (
        <>
            <h3 className="mt-4">Order</h3>
            <p>Here you can view the details of your order</p>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Serving</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Serving</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>

                <tbody>
                    {orderItems}
                </tbody>

                <tr>
                    <td className="text-right font-weight-bold" colspan="6">Total</td>
                    <td>{getTotalCost(props.orderItems)}</td>
                </tr>
            </Table>
        </>
    )
}

export default Order;