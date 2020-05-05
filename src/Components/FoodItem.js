import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FoodItem = (props) => {
    return (
        <>
            <Card className="border border-secondary" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + (props.item.image)} />
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <div className="font-weight-bold">
                        Rs. {props.item.price}
                    </div>

                    <div className="font-weight-bold d-inline">
                        Serves: <div className="font-weight-normal d-inline">{props.item.serving}</div>
                    </div>
                    <Button className="d-block mt-2 " variant="primary" onClick={() => props.onClick(props.item)}>Add to Order</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default FoodItem;