
import React from 'react';
import ProductRow from './ProductRow';


const ProductTable = (props) => {
    const product = props.products.data

    return(
    <div className="container mt-5">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product, index) => {
                    return <ProductRow  key={index} {...product}/> })}
            </tbody>
        </table>
    </div>
    )
}
export default ProductTable;