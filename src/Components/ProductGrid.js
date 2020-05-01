import React from 'react';

import { Grid } from '@material-ui/core';

import Product from './Product';

function ProductGrid(props) {
    const products = props.products.map((product) =>
        <Grid item xs={12} md={3}>
            <Product
                name={product.name}
                picture={product.picture}
                price={product.price}
                serving={product.serving}
                availableOnDay={product.availableOnDay}>
            </Product>
        </Grid>
    );

    return (
        <Grid container>
            {products}
        </Grid>
    )
}

export default ProductGrid;