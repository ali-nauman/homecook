import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class FoodItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            servingSize: this.props.serving
        };
    }

    setServingSize = event => {
        const servingSize = Number(event.target.value);

        if (servingSize >= this.props.serving) {
            this.setState({
                servingSize: servingSize
            });
        }
    }

    render() {
        return (
            <Card className="mt-4 bg-dark" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + (this.props.image)} width="286" height="286" />
                <Card.Body>
                    <Card.Title className="text-white">{this.props.name}</Card.Title>
                    <div className="font-weight-bold text-white">
                        Rs. {this.props.price}
                    </div>

                    <div className="font-weight-bold d-inline text-white">
                        Serves: <div className="font-weight-normal d-inline">{this.props.serving}</div>
                    </div>

                    <div className="mt-1 text-white">Order for</div>

                    <form className="form-inline">
                        <input className="form-control w-50" id="servingSize" name="servingSize" type="number" min={this.props.serving} step={this.props.serving} value={this.state.servingSize} onChange={this.setServingSize}></input>

                        <Button className="d-block ml-5 px-3" variant="primary" onClick={() => this.props.onClick({
                            id: this.props.id,
                            name: this.props.name,
                            image: this.props.image,
                            price: this.props.price,
                            serving: this.props.serving,
                            availableOnDay: this.props.availableOnDay
                        },
                            this.state.servingSize)}>Order</Button>
                    </form>
                </Card.Body>
            </Card>
        );
    }
}

export default FoodItem;