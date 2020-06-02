import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class FoodItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            quantity: 1
        }
    }

    setQuantity(value) {
        console.log(`Old quantity: ${this.state.quantity}`)
        this.setState({
            quantity: value
        })

        console.log(`New quantity: ${this.state.quantity}`)
    }

    render() {
        return (
            <>
                <Card className="border border-secondary" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={process.env.PUBLIC_URL + (this.props.item.image)} width="286" height="286" />
                    <Card.Body>
                        <Card.Title>{this.props.item.name}</Card.Title>
                        <div className="font-weight-bold">
                            Rs. {this.props.item.price}
                        </div>

                        <div className="font-weight-bold d-inline">
                            Serves: <div className="font-weight-normal d-inline">{this.props.item.serving}</div>
                        </div>

                        <div className="mt-1">Order for</div>
                        <form className="form-inline">
                            <input className="form-control w-50" id="servingSize" name="servingSize" type="number" value={this.props.item.serving} min={this.props.item.serving} onChange={(e) => this.setQuantity(e.target.value)}></input>
                            <Button className="d-block w-50" variant="primary" onClick={() => this.props.onClick(this.props.item, this.state.quantity)}>Order</Button>
                        </form>

                        {/* <Button className="d-block mt-2 " variant="primary" onClick={() => props.onClick(props.item)}>Add to Order</Button> */}
                    </Card.Body>
                </Card>
            </>
        )
    }
}

// const FoodItem = (props) => {
//     let quantity = 0;

//     const setQuantity = (newQuantity) => {
//         console.log(`setQuantity called with argument ${newQuantity}`);
//         quantity = newQuantity;
//     };

//     return (
//         <>
//             <Card className="border border-secondary" style={{ width: '18rem' }}>
//                 <Card.Img variant="top" src={process.env.PUBLIC_URL + (props.item.image)} width="286" height="286" />
//                 <Card.Body>
//                     <Card.Title>{props.item.name}</Card.Title>
//                     <div className="font-weight-bold">
//                         Rs. {props.item.price}
//                     </div>

//                     <div className="font-weight-bold d-inline">
//                         Serves: <div className="font-weight-normal d-inline">{props.item.serving}</div>
//                     </div>

//                     <div className="mt-1">Order for</div>
//                     <form className="form-inline">
//                         <input className="form-control w-50" id="servingSize" name="servingSize" type="number" placeholder={props.item.serving} onChange={e => setQuantity(e.target.value)}></input>
//                         <Button className="d-block w-50" variant="primary" onClick={() => props.onClick(props.item, quantity)}>Order</Button>
//                     </form>

//                     {/* <Button className="d-block mt-2 " variant="primary" onClick={() => props.onClick(props.item)}>Add to Order</Button> */}
//                 </Card.Body>
//             </Card>
//         </>
//     )
// }

export default FoodItem;