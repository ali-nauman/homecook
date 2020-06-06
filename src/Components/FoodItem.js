import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class FoodItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            servingSize: this.props.item.serving
        }
    }

    setServingSize(servingSize) {
        if (Number(servingSize) > this.props.item.serving) {
            this.setState({
                servingSize: Number(servingSize)
            })
        }
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
                            <input className="form-control w-50" id="servingSize" name="servingSize" type="number" min={this.props.item.serving} step={this.props.item.serving}onChange={(e) => this.setServingSize(e.target.value)}></input>
                            <Button className="d-block ml-5 px-3" variant="primary" onClick={() => this.props.onClick(this.props.item, this.state.servingSize)}>Order</Button>
                        </form>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default FoodItem;