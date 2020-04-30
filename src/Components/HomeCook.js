import React from 'react';

import NavBar from './NavBar';
import ProductGrid from './ProductGrid';

import products from '../Products';

class HomeCook extends React.Component {
    products = products;

    render() {
        return (
            <React.Fragment>
                <NavBar numItems="0"></NavBar>
                <ProductGrid products={products}> </ProductGrid>
            </React.Fragment>
        )
    }
}

export default HomeCook;