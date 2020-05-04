import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const FoodItem = (props) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + (props.image)}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                        <div className="font-weight-bold">
                            Rs. {props.price}
                        </div>

                        <div className="font-weight-bold d-inline">
                            Serves: <div className="font-weight-normal d-inline">{props.serving}</div>
                        </div>
                    <Button className="d-block" variant="primary" onClick={() => props.onClick(props.id)}>Add to Order</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default FoodItem;